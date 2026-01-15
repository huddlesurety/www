"use client";

import { cn } from "@/lib/utils";

const features = [
  {
    id: "01",
    title: "Intelligent Document Processing",
    description:
      "Our RAG-powered AI extracts and validates information from uploaded documents automatically, reducing manual data entry by 90%.",
    size: "large",
  },
  {
    id: "02",
    title: "Real-Time Collaboration",
    description:
      "Contractors and agents work together seamlessly. Changes sync instantly with full transparency.",
    size: "small",
  },
  {
    id: "03",
    title: "Automated Generation",
    description:
      "Generate complete bond request packages in minutes. Our system compiles all required documents automatically.",
    size: "small",
  },
  {
    id: "04",
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with industry regulations. Your sensitive data is protected.",
    size: "medium",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header - left aligned */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide">
              Capabilities
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
              Everything you need
              <br />
              to streamline surety
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Purpose-built tools that transform how contractors and agents
              handle bond requests. No more scattered documents or endless
              email chains.
            </p>
          </div>
        </div>

        {/* Asymmetric feature grid */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Large feature - spans 7 columns */}
          <div
            className={cn(
              "lg:col-span-7 group border border-border p-8 lg:p-12",
              "hover:border-foreground/20 transition-colors duration-300"
            )}
          >
            <div className="flex flex-col h-full min-h-[320px]">
              <span className="text-xs text-muted-foreground font-mono">
                {features[0].id}
              </span>
              <h3 className="text-2xl lg:text-3xl font-medium mt-4 mb-6 max-w-md">
                {features[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-lg mt-auto">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Stacked small features - spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {features.slice(1, 3).map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "group border border-border p-8 flex-1",
                  "hover:border-foreground/20 transition-colors duration-300"
                )}
              >
                <span className="text-xs text-muted-foreground font-mono">
                  {feature.id}
                </span>
                <h3 className="text-xl font-medium mt-4 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom feature - offset */}
          <div
            className={cn(
              "lg:col-span-12 group border border-border p-8 lg:p-12",
              "hover:border-foreground/20 transition-colors duration-300"
            )}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className="text-xs text-muted-foreground font-mono">
                  {features[3].id}
                </span>
                <h3 className="text-2xl font-medium mt-4 mb-3">
                  {features[3].title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
