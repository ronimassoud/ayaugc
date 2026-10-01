import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import Container from "@/components/container";

export const Wrap = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Container className={className}>{children}</Container>
);

export const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("md:py-20 xl:py-32 py-12", className)}>
    <Container><AnimateOnView once>{children}</AnimateOnView></Container>
  </section>
);

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <Badge className="mb-4">{children}</Badge>
);

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("h3 max-w-3xl", className)}>{children}</h2>
);

type BtnProps = { to: string; children: React.ReactNode; variant?: "primary" | "outline" | "ghost"; className?: string };
export const Btn = ({ to, children, variant = "primary", className }: BtnProps) => {
  const external = to.startsWith("http") || to.startsWith("#") || to.startsWith("mailto");
  const inner = (
    <>
      {children}
      {variant === "primary" && <ArrowRight className="w-5 h-5" />}
    </>
  );
  const v = variant === "primary" ? "default" : variant === "outline" ? "outline" : "link";
  return (
    <Button asChild variant={v} size={variant === "ghost" ? "link" : "default"} className={cn(variant === "ghost" && "text-primary hover:text-primary", className)}>
      {external ? <a href={to}>{inner}</a> : <Link to={to}>{inner}</Link>}
    </Button>
  );
};

/** 9:16 media placeholder card for UGC video stills (replace with real photos later). */
export const PhoneFrame = ({ label, tone = 0, className }: { label?: string; tone?: number; className?: string }) => {
  const tones = [
    "bg-revio-charcoal",
    "bg-revio-light-pink",
    "bg-revio-light-green",
    "bg-revio-light-orchid",
    "bg-primary",
  ];
  return (
    <div className={cn("relative flex aspect-[9/16] w-full items-end overflow-hidden rounded-lg p-4", tones[tone % tones.length], className)}>
      {label && <span className="rounded-[10px] bg-white px-3 py-1 text-xs font-medium text-foreground">{label}</span>}
    </div>
  );
};

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("rounded-lg bg-card p-6 md:p-8 text-card-foreground", className)}>{children}</div>
);

/** Dark, centered hero matching the template's banner. */
export const PageHero = ({ badges = [], title, sub, children, media }: {
  badges?: React.ReactNode[]; title: React.ReactNode; sub?: React.ReactNode; children?: React.ReactNode; media?: React.ReactNode;
}) => (
  <section className="relative bg-black overflow-hidden banner-top-padding md:pb-20 lg:pb-24 pb-[60px] text-white">
    <Container className="relative z-10">
      {badges.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-8">
          {badges.map((b, i) => <AnimateOnView key={i} delay={i * 0.1}><Badge variant="color">{b}</Badge></AnimateOnView>)}
        </div>
      )}
      <AnimateOnView blur delay={0.2} className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="h1 text-white">{title}</h1>
      </AnimateOnView>
      {sub && (
        <AnimateOnView blur delay={0.3} className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-lg text-muted">{sub}</p>
        </AnimateOnView>
      )}
      {children && (
        <AnimateOnView delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">{children}</AnimateOnView>
      )}
      {media && <AnimateOnView delay={0.6} className="mt-[50px] xl:mt-24">{media}</AnimateOnView>}
    </Container>
  </section>
);
