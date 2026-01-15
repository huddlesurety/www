"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - large text */}
          <div className="lg:col-span-6">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
              Ready to transform
              <br />
              your workflow?
            </h2>

            <div className="space-y-6 max-w-md">
              <p className="text-muted-foreground leading-relaxed">
                Schedule a personalized demo to see how Huddle can streamline
                your surety bond operations.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-px bg-foreground" />
                  Free 30-minute demo
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-px bg-foreground" />
                  Custom workflow analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-px bg-foreground" />
                  No commitment required
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - form */}
          <div className="lg:col-span-5 lg:col-start-8">
            {isSubmitted ? (
              <div className="border border-border p-12 text-center">
                <div className="w-12 h-12 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="square" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Request received</h3>
                <p className="text-muted-foreground">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full h-12 px-4 text-sm bg-transparent border border-border",
                        "focus:outline-none focus:border-foreground transition-colors"
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full h-12 px-4 text-sm bg-transparent border border-border",
                        "focus:outline-none focus:border-foreground transition-colors"
                      )}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full h-12 px-4 text-sm bg-transparent border border-border",
                        "focus:outline-none focus:border-foreground transition-colors"
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full h-12 px-4 text-sm bg-transparent border border-border",
                        "focus:outline-none focus:border-foreground transition-colors appearance-none"
                      )}
                    >
                      <option value="">Select</option>
                      <option value="contractor">Contractor</option>
                      <option value="agent">Surety Agent</option>
                      <option value="underwriter">Underwriter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 text-sm bg-transparent border border-border resize-none",
                      "focus:outline-none focus:border-foreground transition-colors"
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
