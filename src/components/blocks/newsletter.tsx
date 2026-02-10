"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { IconMail } from "@tabler/icons-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { Icons } from "../icons";
import { ButtonGroup } from "../ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

import { subscribeNewsletter } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";

export const newsletterSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: standardSchemaResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    const result = await subscribeNewsletter(values);
    if (result?.error) {
      toast.error(result.error);
      return;
    }
    toast.success(result?.success ?? "Subscription confirmed.");
    form.reset();
  };

  return (
    <section className="container mx-auto flex flex-col items-center gap-6 px-6 py-16 text-center lg:py-24">
      <Icons.Newsletter className="text-muted-foreground size-28" />
      <div className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Subscribe to the Pointr newsletter
        </h2>
        <p className="text-muted-foreground">
          Product launches, tips, and curated tutorials—straight to your inbox.
        </p>
      </div>
      <form
        className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ButtonGroup className="border-muted-foreground mx-auto w-1/2 min-w-73.5 rounded-lg border dark:border-0">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <InputGroup className="border-r-muted-foreground h-full dark:border-r-0">
                <InputGroupAddon>
                  <IconMail className="h-4 w-4" />
                </InputGroupAddon>
                <InputGroupInput
                  {...field}
                  id={field.name}
                  type="email"
                  className=""
                  placeholder="you@pointr.dev"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
            )}
          />
          <Button
            type="submit"
            variant={"secondary"}
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </ButtonGroup>
      </form>
    </section>
  );
};

export default Newsletter;
