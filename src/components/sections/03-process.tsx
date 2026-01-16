"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

type Step = {
  id: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: "01",
    title: "Upload",
    description:
      "Drag and drop your project documents. Our AI instantly processes contracts, financial statements, and supporting materials.",
  },
  {
    id: "02",
    title: "Extract",
    description:
      "Advanced RAG pipeline extracts key information, validates data, and pre-fills bond request forms with remarkable accuracy.",
  },
  {
    id: "03",
    title: "Collaborate",
    description:
      "Contractors and agents review together in real-time. Make edits, add notes, and track changes with full version history.",
  },
  {
    id: "04",
    title: "Submit",
    description:
      "Generate complete bond packages with one click. Monitor approval status and receive instant notifications.",
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeStepFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1],
  );

  useMotionValueEvent(activeStepFloat, "change", (latest) => {
    const step = Math.round(latest);
    if (step !== currentStep && step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  });

  return (
    <section
      id="process"
      ref={containerRef}
      style={{ height: `${steps.length * 100}vh` }}
      className="relative bg-muted/30"
    >
      <div className="sticky top-0 h-svh overflow-hidden flex flex-col section-container">
        <div className="pb-12">
          <p className="section-label">Process</p>
          <h2 className="section-title">Four steps to faster bonds</h2>
        </div>

        <div className="flex-1 min-h-0 pb-8 lg:pb-16 flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div className="lg:w-80 shrink-0 flex flex-col">
            <div className="h-44 lg:flex-1 relative">
              <AnimatePresence mode="wait">
                <StepContent key={currentStep} step={steps[currentStep]} />
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-4 lg:mt-8">
              {steps.map((_, i) => (
                <StepIndicator key={i} index={i} currentStep={currentStep} />
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-hidden w-full relative mask-b-from-90% mask-b-to-100%">
            {steps.map((_, i) => (
              <StepImage key={i} index={i} currentStep={currentStep} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepContent = ({ step }: { step: Step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-0"
    >
      <span className="block text-5xl font-serif font-normal text-muted-foreground/20 mb-4">
        {step.id}
      </span>
      <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {step.description}
      </p>
    </motion.div>
  );
};

const StepIndicator = ({
  index,
  currentStep,
}: {
  index: number;
  currentStep: number;
}) => {
  const isActive = index === currentStep;
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.25,
        width: isActive ? 32 : 16,
      }}
      transition={{ duration: 0.3 }}
      className="h-1 bg-foreground origin-left"
    />
  );
};

const StepImage = ({
  index,
  currentStep,
}: {
  index: number;
  currentStep: number;
}) => {
  const offset = index - currentStep;
  const distance = Math.abs(offset);
  const isActive = distance === 0;
  const gap = 16;

  return (
    <motion.div
      animate={{
        y: `calc(${offset} * (100% + ${gap}px))`,
        opacity: isActive ? 1 : Math.max(0.2, 1 - distance * 0.4),
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 bg-muted border border-border flex items-center justify-center text-muted-foreground/40 text-sm aspect-video"
    >
      Step {index + 1} Screenshot
    </motion.div>
  );
};
