import React, { useEffect, useState } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, XIcon } from "lucide-react";
import { nav, site } from "@/config/site";
import { cn } from "@/lib/utils";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const Logo = () => <span className="text-xl font-semibold tracking-tight text-white">aya<span className="text-primary">.ugc</span></span>;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 w-full transition-[padding,background-color,border-color] duration-300",
      scrolled ? "border-b border-white/10 bg-black/80 py-4 backdrop-blur-md" : "border-b border-transparent pt-6 md:pt-10",
    )}>
      <Container className="flex justify-between items-center">
        <Link to="/" className="xl:w-[25%] w-fit"><Logo /></Link>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Menu" className="text-white h-11 w-11 flex items-center justify-center"><Menu className="w-6 h-6" /></button>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-black border-foreground">
              <SheetHeader className="flex flex-row justify-between border-b border-foreground">
                <SheetTitle><Link to="/" onClick={() => setOpen(false)}><Logo /></Link></SheetTitle>
                <SheetPrimitive.Close className="h-11 w-11 flex items-center justify-center opacity-70 hover:opacity-100">
                  <XIcon className="size-5 text-white" /><span className="sr-only">Close</span>
                </SheetPrimitive.Close>
              </SheetHeader>
              <div className="px-5 py-6 flex flex-col gap-2">
                {nav.map((n) => (
                  <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-primary transition-colors">{n.label}</Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-primary">Contact</Link>
                <Button asChild className="mt-4 w-full"><Link to="/challenge" onClick={() => setOpen(false)}>Join the challenge</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden lg:flex mx-auto gap-1">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="px-4 py-2 whitespace-nowrap text-white hover:text-primary transition-colors">{n.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex xl:w-[25%] justify-end">
          <Button asChild variant="gray"><Link to="/challenge">Join the challenge</Link></Button>
        </div>
      </Container>
    </header>
  );
};

const CTA = () => (
  <div className="bg-black text-white md:pt-20 xl:pt-24 pt-12 pb-8 overflow-hidden">
    <Container>
      <AnimateOnView once blur className="max-w-[721px] mx-auto text-center">
        <h2 className="h1 mb-6">Ready to start your UGC journey?</h2>
        <p className="text-lg text-muted mb-10">Next cohort starts {site.challenge.startDate}. One short lesson and one filming task a day, with Aya guiding you.</p>
        <Button asChild><Link to="/challenge">Join the 15-Day Challenge <ArrowRight className="w-5 h-5" /></Link></Button>
      </AnimateOnView>
    </Container>
  </div>
);

const Footer = () => (
  <footer className="relative bg-black text-white pt-36 pb-8 overflow-hidden">
    <div className="absolute bottom-0 left-0 pointer-events-none w-[533px] h-[601px] z-10">
      <img src="/images/common/footer-pattern.svg" alt="" />
    </div>
    <Container className="relative z-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
        <div className="space-y-[60px] max-w-[310px]">
          <div>
            <Link to="/" className="mb-6 inline-block"><Logo /></Link>
            <p className="text-muted">UGC that sells for brands, and a clear path for new creators.</p>
          </div>
          <div className="space-y-2.5">
            <p className="text-white">Contact:</p>
            <a href={`mailto:${site.email}`} className="text-muted hover:text-white">{site.email}</a>
            <Link to="/about#contact" className="block text-muted hover:text-white">Send a message</Link>
          </div>
        </div>
        <div className="max-w-[537px] grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-6">Pages</h3>
            <ul className="space-y-3">
              {[{ label: "Home", to: "/" }, ...nav, { label: "Contact", to: "/contact" }].map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow</h3>
            <ul className="space-y-3">
              <li><a href={site.instagram.url} target="_blank" rel="noreferrer" className="text-muted hover:text-white">Instagram {site.instagram.handle}</a></li>
              <li><a href={site.tiktok.url} className="text-muted hover:text-white">TikTok {site.tiktok.handle}</a></li>
              <li><a href={site.equipmentUrl} className="text-muted hover:text-white">My equipment list</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {site.owner}. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-white">Terms</Link>
          <Link to="/refunds" className="text-sm text-muted-foreground hover:text-white">Refund Policy</Link>
        </div>
      </div>
    </Container>
  </footer>
);

const Layout = ({ children, hideCta }: { children: React.ReactNode; hideCta?: boolean }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      {!hideCta && <CTA />}
      <Footer />
    </main>
  );
};
export default Layout;
