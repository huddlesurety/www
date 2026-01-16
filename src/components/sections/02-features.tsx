import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type Feature = {
  id: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: "01",
    title: "Intelligent Document Processing",
    description:
      "Our RAG-powered AI extracts and validates information from uploaded documents automatically, reducing manual data entry by 90%.",
  },
  {
    id: "02",
    title: "Real-Time Collaboration",
    description:
      "Contractors and agents work together seamlessly. Changes sync instantly with full transparency.",
  },
  {
    id: "03",
    title: "Automated Generation",
    description:
      "Generate complete bond request packages in minutes. Our system compiles all required documents automatically.",
  },
  {
    id: "04",
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance with industry regulations. Your sensitive data is protected.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="section-container">
      <div className="grid lg:grid-cols-12 gap-8 mb-12 lg:mb-20">
        <div className="lg:col-span-7">
          <p className="section-label">Features</p>
          <h2 className="section-title">
            Everything you need
            <br />
            to streamline surety
          </h2>
        </div>
        <div className="lg:col-span-4 self-end">
          <p className="section-description">
            Purpose-built tools that transform how contractors and agents handle
            bond requests. No more scattered documents or endless email chains.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-4">
        <FeatureCard feature={features[0]} className="lg:col-span-7" large />

        <div className="lg:col-span-5 flex flex-col gap-4">
          {features.slice(1).map((feature, i) => (
            <FeatureCard key={i} feature={feature} className="flex-1" />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  feature: Feature;
  large?: boolean;
  horizontal?: boolean;
} & ComponentProps<"div">;

const FeatureCard = ({
  feature,
  large,
  horizontal,
  id,
  className,
  ...props
}: FeatureCardProps) => {
  if (horizontal) {
    return (
      <div
        {...props}
        className={cn(
          "group border border-border p-8 lg:p-12",
          "hover:border-foreground/20 transition-colors duration-300",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs text-muted-foreground font-mono">
              {feature.id}
            </span>
            <h3 className="text-2xl font-medium mt-4 mb-3">{feature.title}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            {feature.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group border border-border p-8",
        "hover:border-ring transition-colors duration-300",
        large && "lg:p-12",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <span className="text-xs text-muted-foreground font-mono">
          {feature.id}
        </span>
        <h3
          className={cn(
            "font-medium mt-4 mb-3",
            large ? "text-2xl lg:text-3xl max-w-md mb-6" : "text-xl"
          )}
        >
          {feature.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed",
            large ? "max-w-lg mt-auto" : "text-sm"
          )}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
};
