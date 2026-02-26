"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export const Wave = () => {
  const phase = useMotionValue(0);

  const wave = useTransform(phase, (phaseValue) => {
    return irregularSineWave(50, 2, phaseValue);
  });

  useEffect(() => {
    const controls = animate(phase, Math.PI * 2, {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [phase]);

  return (
    <svg
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      className="w-fit rotate-z-180"
    >
      {Array.from({ length: 100 }).map((_, i) => {
        const barHeight = useTransform(wave, (waveArray) => {
          return waveArray[i] * 160;
        });
        const barWidth = useTransform(wave, (waveArray) => {
          return waveArray[i] * 8;
        });

        const x = (i / 50) * 1000;

        return (
          <motion.rect
            key={i}
            x={x}
            y={0}
            width={barWidth}
            height={barHeight}
            className="fill-primary"
          />
        );
      })}
    </svg>
  );
};

const irregularSineWave = (
  length: number,
  baseFreq: number = 2,
  phase: number = 0
): number[] => {
  return Array.from({ length }, (_, i) => {
    const t = i / length;
    const sine = Math.sin(t * Math.PI * 2 * baseFreq + phase);
    const envelope = Math.sin(t * Math.PI) * 0.7 + 0.3;
    return Math.max(0, (sine * envelope + 1) / 2);
  });
};
