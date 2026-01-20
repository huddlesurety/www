"use client";

import { motion } from "motion/react";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/01-hero";
import { Features } from "@/components/sections/02-features";
import { Process } from "@/components/sections/03-process";
import { Contact } from "@/components/sections/04-contact";
import { Footer } from "@/components/sections/05-footer";

const Page = () => {
  return (
    <>
      <Navigation />
      <div className="h-16" />
      <motion.main
        initial={{
          outlineColor: "transparent",
          outlineOffset: "0px",
        }}
        animate={{
          outlineColor: "var(--border)",
          outlineOffset: "8px",
        }}
        transition={{
          duration: 0.8,
          ease: "circOut",
        }}
        className="w-responsive border-x bg-background relative flex flex-col gap-20 md:gap-32 lg:gap-40 xl:gap-48 outline"
      >
        <Hero />
        <Features />
        <Process />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
};

export default Page;
