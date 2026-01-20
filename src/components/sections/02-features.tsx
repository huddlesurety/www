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
    title: "Client Portal",
    description:
      "Provide your clients with a modern, AI-driven portal that automates bond requests while ensuring completion of forms.",
  },
  {
    id: "02",
    title: "Bonding Automation",
    description:
      "Accelerate your processing & execution speeds to increase bond servicing capacity with our surety-trained AI tools. ",
  },
  {
    id: "03",
    title: "Real-time Status Tracking",
    description:
      "Gain visibility into the live status of every bond request across your agency to share with your clients—no more follow-up calls or emails to check on progress.",
  },
  {
    id: "04",
    title: "Enhanced Communication",
    description:
      "Centralize collaboration between contractors and agents in one platform, replacing fragmented email chains and phone calls.",
  },
  {
    id: "05",
    title: "Huddle Highlight™",
    description:
      "Quickly review bond requests and streamline quality control to ensure accuracy of essential bond information.",
  },
  {
    id: "06",
    title: "Intelligent Account Oversight",
    description:
      "Set custom parameters and automated triggers for requesting additional information for every client account, allowing your team to focus on high-value advisory rather than data entry.",
  },
];

export const Features = () => {
  return (
    <section id="features">
      <p className="section-label">Features</p>
      <div className="space-y-4 md:space-y-8">
        <h2 className="section-title">
          Everything you need
          <br />
          to streamline surety
        </h2>
        <p className="section-description max-w-lg">
          Purpose-built tools that transform how contractors and agents handle
          bond requests. No more scattered documents or endless email chains.
        </p>

        <div className="grid lg:grid-cols-12 gap-4">
          <FeatureCard feature={features[0]} className="lg:col-span-7" />
          <FeatureCard feature={features[1]} className="lg:col-span-5" />

          <FeatureCard feature={features[2]} className="lg:col-span-5" />
          <FeatureCard feature={features[3]} className="lg:col-span-7" />

          <FeatureCard feature={features[4]} className="lg:col-span-6" />
          <FeatureCard feature={features[5]} className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  feature: Feature;
} & ComponentProps<"div">;

const FeatureCard = ({ feature, className, ...props }: FeatureCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        "group border p-8 hover:border-ring transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground font-mono">
          {feature.id}
        </span>
        <h3 className="font-medium mt-4 mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
