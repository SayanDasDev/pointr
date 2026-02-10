import { Heading, Link, Text } from "@react-email/components";

import { EmailButton } from "./components/email-button";
import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface WelcomeEmailProps {
  userName?: string;
  getStartedUrl: string;
  docsUrl?: string;
}

export const WelcomeEmail = ({
  userName,
  getStartedUrl,
  docsUrl = "https://pointr.sayandas.co.in/help",
}: WelcomeEmailProps) => (
  <EmailLayout preview="Welcome to Pointr">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      Welcome to Pointr
    </Heading>
    <Text className="mb-4 text-xl">
      Hi {userName || "there"}, your workspace is ready. We&apos;re excited to
      have you onboard.
    </Text>
    <Text className="mb-4 text-xl">
      Start a project, connect your repo, and let Pointr help you ship faster.
    </Text>

    <EmailButton href={getStartedUrl} label="Get started" />

    <Text className="text-sm leading-6 text-black">
      Want tips and shortcuts? Explore{" "}
      <Link
        className="text-[#1d1c1d] underline"
        href={docsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        the guide
      </Link>
      .
    </Text>

    <EmailFooter />
  </EmailLayout>
);

WelcomeEmail.PreviewProps = {
  userName: "Avery",
  getStartedUrl: "http://localhost:3000/onboarding",
  docsUrl: "https://pointr.com/help",
} as WelcomeEmailProps;

export default WelcomeEmail;
