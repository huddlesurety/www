"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { CSSProperties, useState } from "react";

import { Button } from "@/components/ui/button";

import { Logo } from "./logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const { scrollY } = useScroll();
  const [style, setStyle] = useState<CSSProperties>({
    background: "transparent",
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const opacity = Math.min((latest / 64) * 100, 90);
    const blur = Math.min(latest / 20, 10);
    setStyle({
      background: `color-mix(in oklab, var(--background) ${opacity}%, transparent)`,
      backdropFilter: `blur(${blur}px)`,
    });
  });

  return (
    <header className="fixed w-full z-50 border-b bg-background/10">
      <motion.nav
        style={style}
        className="container mx-auto px-8 border-x py-4 flex items-center justify-between relative z-10"
      >
        <Logo withText />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="lg" asChild>
            <Link href="https://dashboard.huddlesurety.co">Sign In</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  );
};
