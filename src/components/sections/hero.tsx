"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="h-svh relative overflow-hidden flex flex-col">
      {/* Main content area - takes remaining space */}
      <div className="flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-20 pb-8">
        {/* Middle - headline and description spread apart */}
        <div className="flex-1 flex flex-col lg:flex-row lg:items-end justify-center lg:justify-between gap-12 py-12">
          {/* Left - main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tighter leading-[0.9]"
          >
            Bond requests,
            <br />
            <span className="text-muted-foreground">simplified.</span>
          </motion.h1>

          {/* Right - description and CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:max-w-sm lg:text-right"
          >
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Huddle transforms surety workflows with intelligent document
              processing. Contractors and agents collaborate seamlessly on bond
              requests.
            </p>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button size="lg" asChild>
                <Link href="#contact">Request Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom - stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              90%
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Reduction in manual entry
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              3x
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Faster bond processing
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              500+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Bonds processed monthly
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              24/7
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time collaboration
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
