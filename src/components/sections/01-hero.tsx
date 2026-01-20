"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center pb-12 gap-8 md:gap-12 h-svh relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "circOut",
        }}
        className="absolute right-0 top-0 size-full bg-primary/20 mask-linear-225 mask-linear-from-0% mask-linear-to-40% origin-top-right"
      />

      <motion.h1
        initial={{ fontWeight: 800, opacity: 0 }}
        animate={{ fontWeight: 400, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-none text-primary"
      >
        The New Era of
        <br />
        Surety Bonds
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="max-w-lg text-base text-muted-foreground leading-relaxed"
      >
        Move beyond the limitations of antiquated systems.
        <br />
        Huddle streamlines the entire request-to-execution journey,
        <br />
        allowing brokers to focus on high-value advisory
        <br />
        and client relationships.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="space-x-2 space-y-1 overflow-hidden"
      >
        <Button size="xl" asChild>
          <Link href="#contact">Request Demo</Link>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <Link href="#process">Learn More</Link>
        </Button>
      </motion.div>
    </section>
  );
};
