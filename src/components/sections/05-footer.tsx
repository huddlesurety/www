import Image from "next/image";
import Link from "next/link";

import { Logo } from "../logo";

const links = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="w-responsive py-16 border-x">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="max-w-xs">
            <Logo withText />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              AI-powered surety bond solutions for modern contractors and
              agents.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 flex-1 max-w-xl">
            <LinkColumn title="Product" links={links.product} />
            <LinkColumn title="Company" links={links.company} />
            <LinkColumn title="Legal" links={links.legal} />
          </div>
        </div>

        <div className="mt-16 pt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Huddle
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

type LinkColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const LinkColumn = ({ title, links }: LinkColumnProps) => (
  <div>
    <h4 className="text-xs font-medium uppercase tracking-wider mb-4">
      {title}
    </h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
