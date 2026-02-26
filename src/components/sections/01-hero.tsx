"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Wave = dynamic(
  () => import("@/components/animation/wave").then((mod) => mod.Wave),
  { ssr: false }
);

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-65px)] py-6 md:py-12 lg:py-20 relative flex flex-col">
      <div className="flex flex-col pb-12 gap-8 md:gap-12 relative overflow-hidden">
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
      </div>

      <div className="relative flex-1">
        <motion.div className="absolute right-0 bottom-0 rounded-full size-50 bg-primary" />
        <div className="" />
      </div>
    </section>
  );
};
