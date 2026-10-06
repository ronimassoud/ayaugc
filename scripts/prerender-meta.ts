// Runs after `vite build` (postbuild hook); writes dist/<route>.html for every page with that
// page's meta tags, so static hosts answer 200 and link-preview crawlers see the right title.

import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path"
import { meta } from "../src/config/seo"
import { site } from "../src/config/site"

// Where this build is served from; defaults to the canonical domain.
const SITE_URL = (process.env.SITE_URL || site.domain).replace(/\/$/, "")

// Legacy URLs that App.tsx redirects; each gets its target's HTML.
const aliases: Record<string, keyof typeof meta> = {
  "/ugc-guide": "/free-guide",
  "/template": "/templates",
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function replaceTag(html: string, pattern: RegExp, tag: string) {
  if (!pattern.test(html)) throw new Error(`prerender-meta: ${pattern} not found in dist/index.html`)
  return html.replace(pattern, () => tag)
}

function render(template: string, { title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`
  let html = template
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  html = replaceTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
  html = replaceTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${esc(url)}" />`)
  html = replaceTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
  html = replaceTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
  html = replaceTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  html = replaceTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`)
  html = replaceTag(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="website" />\n    <meta property="og:url" content="${esc(url)}" />`)
  return html
}

const file = (path: string) => resolve("dist", path === "/" ? "index.html" : `${path.slice(1)}.html`)

const template = readFileSync(resolve("dist/index.html"), "utf8")
const pages = Object.values(meta)

for (const page of pages) writeFileSync(file(page.path), render(template, page))
for (const [from, to] of Object.entries(aliases)) writeFileSync(file(from), render(template, meta[to]))

console.log(`prerender-meta: wrote ${pages.length + Object.keys(aliases).length} pages for ${SITE_URL}`)
