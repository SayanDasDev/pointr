import { Heading, Section, Text } from "@react-email/components";

import { EmailButton } from "./components/email-button";
import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface RecentLoginEmailProps {
  userName?: string;
  device: string;
  location: string;
  time: string;
  manageSecurityUrl: string;
}

export const RecentLoginEmail = ({
  userName,
  device,
  location,
  time,
  manageSecurityUrl,
}: RecentLoginEmailProps) => (
  <EmailLayout preview="New sign-in to your account">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      New sign-in to your account
    </Heading>
    <Text className="mb-4 text-xl">
      Hi {userName || "there"}, we noticed a new sign-in to your account.
    </Text>
    <Section className="mb-4 rounded bg-[rgb(245,244,245)] p-2.5">
      <Text className="text-sm leading-6 text-black">
        <b>Device:</b> {device}
        <br />
        <b>Location:</b> {location}
        <br />
        <b>Time:</b> {time}
      </Text>
    </Section>

    <EmailButton href={manageSecurityUrl} label="Review activity" />

    <Text className="text-sm leading-6 text-black">
      If this was you, no action is needed. If not, secure your account and
      reset your password immediately.
    </Text>

    <EmailFooter />
  </EmailLayout>
);

RecentLoginEmail.PreviewProps = {
  userName: "Avery",
  device: "MacBook Pro · Chrome",
  location: "San Francisco, CA, USA",
  time: "Feb 10, 2026 at 9:41 AM PST",
  manageSecurityUrl: "http://localhost:3000/settings/security",
} as RecentLoginEmailProps;

export default RecentLoginEmail;
