"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <Image src="/logo/light.png" alt="Huddle" width={24} height={24} />
          <span className="font-medium tracking-tight group-hover:opacity-70 transition-opacity">
            Huddle
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://dashboard.huddle.bond"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Button size="sm" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
