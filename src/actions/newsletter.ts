"use server";

import { newsletterSchema } from "@/components/blocks/newsletter";
import { sendNewsletterSubscriptionEmail } from "@/lib/mail";

export const subscribeNewsletter = async (payload: { email: string }) => {
  const validated = newsletterSchema.safeParse(payload);
  if (!validated.success) {
    return { error: "Invalid email address." };
  }

  try {
    await sendNewsletterSubscriptionEmail(validated.data.email);
  } catch {
    return { error: "Failed to send subscription confirmation email." };
  }
  return { success: "You are subscribed to Pointr updates." };
};
