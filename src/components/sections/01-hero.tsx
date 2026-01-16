"use client";

import { animate, cubicBezier, motion, stagger } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "90%", label: "Reduction in manual entry" },
  { value: "3x", label: "Faster bond processing" },
  { value: "500+", label: "Bonds processed monthly" },
  { value: "24/7", label: "Real-time collaboration" },
];

export const Hero = () => {
  return (
    <section className="min-h-svh px-responsive pt-20 pb-8 flex flex-col gap-8">
      <div className="flex-1 flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between gap-8 md:gap-12">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter leading-none">
          Bond requests,
          <br />
          <span className="text-muted-foreground">
            <StaggerCharacter>Simplified.</StaggerCharacter>
          </span>
        </h1>

        <div className="lg:max-w-sm lg:text-right">
          <p className="text-base text-muted-foreground leading-relaxed mb-5 md:mb-8">
            Huddle transforms surety workflows with intelligent document
            processing. Contractors and agents collaborate seamlessly on bond
            requests.
          </p>

          <div className="space-x-2 space-y-1">
            <Button size="xl" asChild>
              <Link href="#contact">Request Demo</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i}>
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

type StaggerCharacterProps = {
  children: string;
};

const StaggerCharacter = ({ children }: StaggerCharacterProps) => {
  useEffect(() => {
    animate(
      `.stagger-character`,
      { skewX: [-20, 0], fontWeight: [500, 400], opacity: [0.5, 1] },
      {
        duration: 0.6,
        ease: cubicBezier(0.33, 1.75, 0.68, 1),
        delay: stagger(0.03, { startDelay: 0.3, ease: "circIn" }),
      }
    );
  }, []);

  return (
    <>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ skewX: 0 }}
          whileHover={{
            skewX: -20,
          }}
          className="stagger-character inline-block cursor-grabbing"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
