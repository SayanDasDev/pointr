import { Resend } from "resend";

import { TwoFactorEmail } from "@/emails/2fa-email";
import { NewsletterEmail } from "@/emails/newsletter-email";
import { RecentLoginEmail } from "@/emails/recent-login-email";
import { ResetPasswordEmail } from "@/emails/reset-password-email";
import { VerifyEmail } from "@/emails/verify-email";
import { WelcomeEmail } from "@/emails/welcome-email";
import { env } from "@/env/server";

const resend = new Resend(env.RESEND_API_KEY);
const fromAddress = "no-reply@pointr.sayandas.co.in";
const baseUrl = env.APP_URL;

export const sendVerificationEmail = async (
  email: string,
  token: string,
  userName?: string,
) => {
  const verifyUrl = `${baseUrl}/verify-email?token=${token}`;

  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Pointr: Verify your email",
    react: VerifyEmail({
      verifyUrl,
      userName,
    }),
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  userName?: string,
) => {
  const resetUrl = `${baseUrl}/reset-password?token=${token}`;

  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Pointr: Reset your password",
    react: ResetPasswordEmail({
      resetUrl,
      userName,
    }),
  });
};

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string,
  options?: {
    expiresInMinutes?: number;
    userName?: string;
  },
) => {
  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Pointr: Your 2FA code",
    react: TwoFactorEmail({
      verificationCode: token,
      expiresInMinutes: options?.expiresInMinutes,
      userName: options?.userName,
    }),
  });
};

export const sendWelcomeEmail = async (
  email: string,
  getStartedUrl: string,
  userName?: string,
) => {
  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Welcome to Pointr",
    react: WelcomeEmail({
      userName,
      getStartedUrl,
    }),
  });
};

export const sendRecentLoginEmail = async (
  email: string,
  details: {
    device: string;
    location: string;
    time: string;
    manageSecurityUrl: string;
    userName?: string;
  },
) => {
  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "Pointr: New sign-in to your account",
    react: RecentLoginEmail({
      userName: details.userName,
      device: details.device,
      location: details.location,
      time: details.time,
      manageSecurityUrl: details.manageSecurityUrl,
    }),
  });
};

export const sendNewsletterSubscriptionEmail = async (email: string) => {
  await resend.emails.send({
    from: fromAddress,
    to: email,
    subject: "You are subscribed to Pointr updates",
    react: NewsletterEmail({
      email,
    }),
  });
};
