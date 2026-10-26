import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";
import { nav, site } from "@/config/site";
import { challengeCta, isPlaceholder } from "@/config/challenge";
import { cn } from "@/lib/utils";
import { Btn, Wrap } from "@/components/site/ui";

// Supplied logo artwork only; never retype the wordmark.
const Logo = ({ onDark = false }: { onDark?: boolean }) => (
  <img
    src={`${import.meta.env.BASE_URL}brand/${onDark ? "AYAUGC_Logo_OnDark_Beige-Mint.svg" : "AYAUGC_Logo_Accent_Pine.svg"}`}
    alt="AYA UGC home"
    width={121}
    height={32}
    className="h-8 w-auto"
  />
);

/** Header button: brands stay in their lane, everyone else sees the challenge CTA for the current status. */
const useHeaderCta = () => {
  const { pathname } = useLocation();
  return pathname === "/brands"
    ? { label: "Request a quote", to: "/brands#quote" }
    : { label: challengeCta().label, to: "/challenge" };
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cta = useHeaderCta();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 border-b bg-beige transition-colors duration-brand ease-brand", scrolled ? "border-line" : "border-transparent")}>
      <Wrap className="flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0"><Logo /></Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  className={({ isActive }) => cn(
                    "inline-flex min-h-11 items-center whitespace-nowrap px-3 font-medium text-ink transition-colors duration-brand hover:text-pine",
                    isActive && "text-pine underline decoration-[1.5px] underline-offset-[8px]",
                  )}
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block"><Btn to={cta.to}>{cta.label}</Btn></div>

        {/* Mobile and tablet: full-height Beige menu panel. */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger aria-label="Open menu" className="inline-flex size-11 items-center justify-center text-ink lg:hidden">
            <Menu aria-hidden strokeWidth={1.75} className="size-6" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-beige data-[state=open]:animate-in data-[state=open]:fade-in-0">
              <Dialog.Title className="sr-only">Menu</Dialog.Title>
              <Wrap className="flex h-[72px] shrink-0 items-center justify-between">
                <Link to="/" onClick={() => setOpen(false)}><Logo /></Link>
                <Dialog.Close aria-label="Close menu" className="inline-flex size-11 items-center justify-center text-ink">
                  <X aria-hidden strokeWidth={1.75} className="size-6" />
                </Dialog.Close>
              </Wrap>
              <Wrap className="flex flex-1 flex-col justify-between overflow-y-auto pb-8">
                <nav aria-label="Main">
                  <ul className="divide-y divide-line border-y border-line">
                    {nav.map((n) => (
                      <li key={n.to}>
                        <NavLink
                          to={n.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) => cn("h3 flex min-h-14 items-center", isActive ? "text-pine" : "text-ink")}
                        >
                          {n.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Btn to={cta.to} onClick={() => setOpen(false)} className="mt-8 w-full">{cta.label}</Btn>
              </Wrap>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Wrap>
    </header>
  );
};

/** One Pine announcement band, under the header. Pages opt in; hidden once doors are closed. */
const AnnouncementBand = () => {
  const c = site.challenge;
  if (c.status === "closed") return null;
  const waitlist = c.status === "waitlist";
  const facts = waitlist
    ? [`Starts ${c.startDate}`, "Waitlist gets early access"]
    : c.status === "early-bird"
      ? [`Starts ${c.startDate}`, `${c.earlyBirdPrice} until ${c.earlyBirdEnds}`]
      : [`Starts ${c.startDate}`, `Doors close ${c.closeDate}`, c.price];
  return (
    <aside aria-label="Challenge announcement" className="bg-pine text-beige">
      <Wrap className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3 text-[15px]">
        <p>
          <strong className="font-semibold">{c.name}</strong>
          {facts.map((f) => <span key={f}> · {f}</span>)}
        </p>
        {waitlist
          ? <Btn to={c.waitlistUrl} systeme variant="linkOnPine">Join the waitlist</Btn>
          : <Btn to="/challenge#days" variant="linkOnPine">See the 15 days</Btn>}
      </Wrap>
    </aside>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const cls = "inline-flex min-h-11 items-center text-beige transition-colors duration-brand hover:text-mint";
  if (isPlaceholder(to)) return <span className="inline-flex min-h-11 items-center text-beige">{children}</span>;
  return to.startsWith("/") ? <Link to={to} className={cls}>{children}</Link> : <a href={to} className={cls}>{children}</a>;
};

const footerColumns = [
  { title: "AYA UGC Studio", links: [{ label: "For brands", to: "/brands" }, { label: "Request a quote", to: "/brands#quote" }] },
  { title: "AYA UGC School", links: [{ label: "15-Day Challenge", to: "/challenge" }, { label: "Free guide", to: "/free-guide" }, { label: "Templates", to: "/templates" }] },
  { title: "AYA UGC", links: [{ label: "About", to: "/about" }, { label: "Contact", to: "/contact" }, { label: "Equipment list", to: site.equipmentUrl }] },
];

const Footer = () => (
  <footer className="border-t border-beige/20 bg-pine text-beige">
    <Wrap className="py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="inline-block"><Logo onDark /></Link>
          <p className="mt-6 max-w-[32ch]">Content that feels real. Skills that are taught honestly.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-beige">{col.title}</h2>
              <ul className="mt-3">
                {col.links.map((l) => <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-beige/20 pt-6 text-[15px]">
        <FooterLink to={isPlaceholder(site.email) ? site.email : `mailto:${site.email}`}>{site.email}</FooterLink>
        <span>{site.location}</span>
        <a href={site.instagram.url} className="inline-flex min-h-11 items-center gap-2 text-beige transition-colors duration-brand hover:text-mint">
          <Instagram aria-hidden strokeWidth={1.75} className="size-5" />
          {site.instagram.handle}
        </a>
        <FooterLink to="/privacy">Privacy</FooterLink>
        <FooterLink to="/terms">Terms</FooterLink>
        <FooterLink to="/refunds">Refunds</FooterLink>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </Wrap>
  </footer>
);

/** Page shell: sticky header, optional announcement band, footer. `hideCta` is ignored and goes once every page moves over. */
const Layout = ({ children, band = false }: { children: React.ReactNode; band?: boolean; hideCta?: boolean }) => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-pine focus:px-5 focus:py-3 focus:text-white">
        Skip to content
      </a>
      <Header />
      {band && <AnnouncementBand />}
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
