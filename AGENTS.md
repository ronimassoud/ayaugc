# AGENTS.md
- Site facts (prices, dates, links, socials) live only in src/config/site.ts — pages read from it so placeholders are updated in one place.
- Checkout, opt-ins and course delivery stay on Systeme.io; this app only links out — avoids running two commerce platforms.
- Pages use shared primitives in src/components/site (Layout, PageHero, Btn, PhoneFrame) restyled from the original template sections — keeps every page visually consistent with the template.
- Forms send via mailto for now — no backend needed at launch.
- Social campaign visits are recorded from utm_* params into a write-only table read via the backend — no third-party analytics needed.
