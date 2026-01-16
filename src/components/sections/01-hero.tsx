"use client";

import {
  animate,
  cubicBezier,
  motion,
  stagger,
  useAnimate,
  useMotionValue,
} from "motion/react";
import Link from "next/link";
import { useEffect } from "react";

import { LogoOutlineSVG, LogoSVG } from "@/components/logo";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "90%", label: "Reduction in manual entry" },
  { value: "3x", label: "Faster bond processing" },
  { value: "500+", label: "Bonds processed monthly" },
  { value: "24/7", label: "Real-time collaboration" },
];

export const Hero = () => {
  const strokeWidth = useMotionValue(0);

  useEffect(() => {
    const animation = animate(strokeWidth, 0.5, {
      duration: 1,
      ease: "circOut",
    });
    return () => animation.stop();
  }, [strokeWidth]);

  return (
    <section className="h-screen section-container pt-20 pb-8 flex flex-col gap-8 relative">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter leading-none">
        Bond requests,
        <br />
        <span className="text-muted-foreground">
          <StaggerCharacter>Simplified.</StaggerCharacter>
        </span>
      </h1>

      <p className="text-base max-w-sm text-muted-foreground leading-relaxed">
        Huddle transforms surety workflows with intelligent document processing.
        Contractors and agents collaborate seamlessly on bond requests.
      </p>

      <div className="flex-1 space-x-2 space-y-1">
        <Button size="xl" asChild>
          <Link href="#contact">Request Demo</Link>
        </Button>
        <Button variant="outline" size="xl" asChild>
          <Link href="#how-it-works">Learn More</Link>
        </Button>
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
  const ease = cubicBezier(0.33, 1.75, 0.68, 1);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      `.stagger-character`,
      { skewX: [-20, 0], fontWeight: [500, 300], opacity: [0.5, 1] },
      {
        duration: 0.6,
        ease,
        delay: stagger(0.03, { startDelay: 0.3, ease: "circIn" }),
      }
    );
  }, []);

  return (
    <span ref={scope}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ skewX: 0 }}
          whileHover={{
            skewX: -10,
          }}
          transition={{
            ease,
          }}
          className="stagger-character inline-block cursor-grabbing opacity-0"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
