import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import "./globals.css";

const serif = Playfair_Display({
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
      <body
        className={`${serif.variable} subpixel-antialiased font-sans relative overflow-y-scroll`}
      >
        <div className="bg-[url(/noise.png)] opacity-5 absolute size-full" />
        {children}
      </body>
    </html>
  );
};

export default Layout;
