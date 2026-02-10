import { Heading, Link, Section, Text } from "@react-email/components";

import { EmailButton } from "./components/email-button";
import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface ResetPasswordEmailProps {
  resetUrl: string;
  userName?: string;
  supportUrl?: string;
}

export const ResetPasswordEmail = ({
  resetUrl,
  userName,
  supportUrl = "https://pointr.com/help",
}: ResetPasswordEmailProps) => (
  <EmailLayout preview="Reset your password">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      Reset your password
    </Heading>
    <Text className="mb-4 text-xl">
      Hi {userName || "there"}, we received a request to reset your password.
    </Text>
    <Text className="mb-4 text-xl">
      Click the button below to choose a new one.
    </Text>

    <EmailButton href={resetUrl} label="Reset password" />

    <Text className="mb-7.5 text-sm leading-6 text-black">
      If you didn&apos;t request this, you can safely ignore this email or
      contact support.
    </Text>
    <Section className="mb-7.5 rounded bg-[rgb(245,244,245)] px-4 py-4">
      <Link className="text-sm break-all text-[#1d1c1d]" href={resetUrl}>
        {resetUrl}
      </Link>
    </Section>
    <Text className="text-sm leading-6 text-black">
      Need help? Visit{" "}
      <Link
        className="text-[#1d1c1d] underline"
        href={supportUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Support
      </Link>
      .
    </Text>

    <EmailFooter />
  </EmailLayout>
);

ResetPasswordEmail.PreviewProps = {
  resetUrl: "http://localhost:3000/reset?token=demo-reset-token",
  userName: "Avery",
  supportUrl: "https://pointr.com/help",
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;
