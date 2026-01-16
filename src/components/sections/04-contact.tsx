"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck } from "@tabler/icons-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

const benefits = [
  "Free 30-minute demo",
  "Custom workflow analysis",
  "No commitment required",
];

export const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <p className="section-label">Get Started</p>
          <div className="space-y-4 md:space-y-8">
            <h2 className="section-title">
              Ready to transform
              <br />
              your workflow?
            </h2>
            <p className="section-description">
              Schedule a personalized demo to see how Huddle can streamline your
              surety bond operations.
            </p>
            <ul className="space-y-3 text-sm">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="w-5 h-px bg-foreground" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const formSchema = z.object({
  name: z.string().nonempty("Name cannot be empty").default(""),
  email: z.email().default(""),
  company: z.string().nonempty("Company cannot be empty").default(""),
  role: z.string().nonempty("Role cannot be empty").default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: formSchema.parse({}),
  });

  const handleSubmit: SubmitHandler<Form> = async (data) => {
    // TODO: Replace with actual API call
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  if (form.formState.isSubmitSuccessful) {
    return <SuccessMessage />;
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="space-y-6 [&_input]:h-12 [&_input]:px-4 [&_textarea]:p-4 [&_label]:uppercase [&_label]:tracking-wide [&_label]:text-muted-foreground"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input {...field} type="text" />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input {...field} type="email" />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Controller
          name="company"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Company</FieldLabel>
              <Input {...field} type="text" />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Role</FieldLabel>
              <Input {...field} type="text" />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
      </div>

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Message (optional)</FieldLabel>
            <Textarea {...field} className="min-h-40" />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Button
        type="submit"
        size="xl"
        className="w-full"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Submitting..." : "Request Demo"}
      </Button>
    </form>
  );
};

const SuccessMessage = () => (
  <Empty className="border h-full">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <IconCheck />
      </EmptyMedia>
      <EmptyTitle>Request received</EmptyTitle>
      <EmptyDescription>
        We&apos;ll be in touch within 24 hours.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
);
