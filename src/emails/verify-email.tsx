import { Heading, Link, Section, Text } from "@react-email/components";

import { EmailButton } from "./components/email-button";
import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface VerifyEmailProps {
  verifyUrl: string;
  userName?: string;
}

export const VerifyEmail = ({ verifyUrl, userName }: VerifyEmailProps) => (
  <EmailLayout preview="Confirm your email address">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      Confirm your email address
    </Heading>
    <Text className="mb-4 text-xl">
      Hi {userName || "there"}, click the button below to confirm your email
      address and finish setting up your account.
    </Text>

    <EmailButton href={verifyUrl} label="Verify email" />

    <Text className="mb-7.5 text-sm leading-6 text-black">
      If the button doesn&apos;t work, copy and paste this link into your
      browser:
    </Text>
    <Section className="mb-7.5 rounded bg-[rgb(245,244,245)] px-4 py-4">
      <Link className="text-sm break-all text-[#1d1c1d]" href={verifyUrl}>
        {verifyUrl}
      </Link>
    </Section>

    <Text className="text-sm leading-6 text-black">
      If you didn&apos;t request this email, there&apos;s nothing to worry
      about, you can safely ignore it.
    </Text>

    <EmailFooter />
  </EmailLayout>
);

VerifyEmail.PreviewProps = {
  verifyUrl: "http://localhost:3000/verify?token=demo-token",
  userName: "Avery",
} as VerifyEmailProps;

export default VerifyEmail;
