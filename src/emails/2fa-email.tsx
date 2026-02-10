import { Heading, Section, Text } from "@react-email/components";

import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface TwoFactorEmailProps {
  verificationCode: string;
  expiresInMinutes?: number;
  userName?: string;
}

export const TwoFactorEmail = ({
  verificationCode,
  expiresInMinutes = 10,
  userName,
}: TwoFactorEmailProps) => (
  <EmailLayout preview="Your two-factor authentication code">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      Two-factor authentication code
    </Heading>
    <Text className="mb-4 text-xl">
      Hi {userName || "there"}, use the code below to finish signing in.
    </Text>

    <Section className="mb-7.5 rounded bg-[rgb(245,244,245)] px-2.5 py-10">
      <Text className="text-center align-middle text-3xl leading-6">
        {verificationCode}
      </Text>
    </Section>

    <Text className="text-sm leading-6 text-black">
      This code expires in {expiresInMinutes} minutes. If you didn&apos;t
      request this, you can safely ignore it.
    </Text>

    <EmailFooter />
  </EmailLayout>
);

TwoFactorEmail.PreviewProps = {
  verificationCode: "392 814",
  expiresInMinutes: 10,
  userName: "Avery",
} as TwoFactorEmailProps;

export default TwoFactorEmail;
