import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Playfair_Display } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Huddle | AI-Powered Surety Bond Solutions",
  description:
    "Revolutionizing the surety industry with intelligent document processing and seamless collaboration between contractors and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
