import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Huddle | AI-Powered Surety Bond Solutions",
  description:
    "Revolutionizing the surety industry with intelligent document processing and seamless collaboration between contractors and agents.",
};

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default Layout;
