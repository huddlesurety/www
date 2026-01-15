"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Drag and drop your project documents. Our AI instantly processes contracts, financial statements, and supporting materials.",
  },
  {
    number: "02",
    title: "Extract",
    description:
      "Advanced RAG pipeline extracts key information, validates data, and pre-fills bond request forms with remarkable accuracy.",
  },
  {
    number: "03",
    title: "Collaborate",
    description:
      "Contractors and agents review together in real-time. Make edits, add notes, and track changes with full version history.",
  },
  {
    number: "04",
    title: "Submit",
    description:
      "Generate complete bond packages with one click. Monitor approval status and receive instant notifications.",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeStepFloat = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  // Track the discrete current step for AnimatePresence
  useMotionValueEvent(activeStepFloat, "change", (latest) => {
    const step = Math.round(latest);
    if (step !== currentStep && step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  });

  return (
    <section id="how-it-works" ref={containerRef} className="relative bg-muted/30">
      <div style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-svh overflow-hidden flex flex-col">
          <div className="max-w-5xl mx-auto w-full px-6 flex flex-col h-full">
            {/* Header */}
            <div className="pt-24 pb-12">
              <p className="text-sm text-muted-foreground mb-4 tracking-wide">
                Process
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                Four steps to faster bonds
              </h2>
            </div>

            {/* Content area */}
            <div className="flex-1 min-h-0 pb-8 lg:pb-16 flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Left side - text */}
              <div className="lg:w-80 shrink-0 flex flex-col">
                {/* Text content - fixed height on mobile to prevent overlap */}
                <div className="h-44 lg:flex-1 relative">
                  <AnimatePresence mode="wait">
                    <StepContent key={currentStep} step={steps[currentStep]} />
                  </AnimatePresence>
                </div>
                
                {/* Progress indicators */}
                <div className="flex gap-2 mt-4 lg:mt-8">
                  {steps.map((step, index) => (
                    <StepIndicator
                      key={step.number}
                      index={index}
                      currentStep={currentStep}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - images */}
              <div className="flex-1 min-h-0 overflow-hidden">
                <ImageStack currentStep={currentStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepContent = ({ step }: { step: (typeof steps)[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute inset-x-0 top-0"
    >
      <span className="block text-5xl font-serif font-normal text-muted-foreground/20 mb-4">
        {step.number}
      </span>
      <h3 className="text-2xl font-medium mb-4">
        {step.title}
      </h3>
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
        scaleX: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.3 }}
      className="h-1 w-8 bg-foreground origin-left"
    />
  );
};

const ImageStack = ({ currentStep }: { currentStep: number }) => {
  const GAP = 16; // gap-4 = 1rem = 16px
  
  return (
    <div className="w-full relative aspect-video">
      {steps.map((step, index) => (
        <StepImage
          key={step.number}
          index={index}
          currentStep={currentStep}
          gap={GAP}
        />
      ))}
    </div>
  );
};

const StepImage = ({
  index,
  currentStep,
  gap,
}: {
  index: number;
  currentStep: number;
  gap: number;
}) => {
  const distance = Math.abs(currentStep - index);
  const isActive = distance === 0;
  
  // Each image is positioned absolutely, offset by (100% + gap) * index
  // Then translated up by (100% + gap) * currentStep
  const offset = index - currentStep;
  
  return (
    <motion.div
      animate={{ 
        y: `calc(${offset} * (100% + ${gap}px))`,
        opacity: isActive ? 1 : Math.max(0.2, 1 - distance * 0.4),
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0 bg-muted border border-border flex items-center justify-center text-muted-foreground/40 text-sm"
    >
      Step {index + 1} Screenshot
    </motion.div>
  );
};
