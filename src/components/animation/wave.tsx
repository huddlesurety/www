"use client";

import {
  MotionValue,
  Variants,
  animate,
  motion,
  stagger,
  useMotionValue,
  useTransform,
} from "motion/react";
import { memo, useEffect } from "react";

const NUM_BARS = 60;
const SVG_HEIGHT = 200;
const SVG_WIDTH = 1000;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.02),
    },
  },
};

const barVariants: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1],
    },
  },
};

export const Wave = () => {
  const phase = useMotionValue(0);

  const wave = useTransform(phase, (phaseValue) => {
    return irregularSineWave(NUM_BARS, 2, phaseValue);
  });

  useEffect(() => {
    const controls = animate(phase, Math.PI * 2, {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [phase]);

  return (
    <motion.svg
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-fit"
    >
      {Array.from({ length: NUM_BARS }).map((_, i) => (
        <Bar key={i} pos={i} wave={wave} />
      ))}
    </motion.svg>
  );
};

type BarProps = {
  wave: MotionValue<number[]>;
  pos: number;
};

const Bar = memo(({ wave, pos }: BarProps) => {
  const barHeight = useTransform(wave, (waveArray) => {
    return waveArray[pos] * SVG_HEIGHT;
  });
  const barWidth = useTransform(wave, (waveArray) => {
    return waveArray[pos] * 8;
  });
  const y = useTransform(barHeight, (h) => SVG_HEIGHT - h);

  const x = pos * (SVG_WIDTH / NUM_BARS);

  return (
    <motion.rect
      x={x}
      y={y}
      width={barWidth}
      height={barHeight}
      variants={barVariants}
      style={{ transformOrigin: "top" }}
      className="fill-border"
    />
  );
});

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
