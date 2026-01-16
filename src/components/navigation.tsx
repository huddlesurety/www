import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Logo } from "./logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 w-svw z-50 px-responsive">
      <div className="absolute top-0 left-0 size-full backdrop-blur-md bg-background/80" />

      <nav className="h-16 flex items-center justify-between relative z-10">
        <Logo withText />

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

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="lg" asChild>
            <Link href="https://dashboard.huddlesurety.co">Sign In</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
