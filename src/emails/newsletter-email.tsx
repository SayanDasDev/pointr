import { Heading, Link, Text } from "@react-email/components";

import { EmailFooter } from "./components/email-footer";
import { EmailHeader } from "./components/email-header";
import { EmailLayout } from "./components/email-layout";

interface NewsletterEmailProps {
  email: string;
  managePreferencesUrl?: string;
}

export const NewsletterEmail = ({
  email,
  managePreferencesUrl = "https://pointr.sayandas.co.in/settings/notifications",
}: NewsletterEmailProps) => (
  <EmailLayout preview="You are subscribed to Pointr updates">
    <EmailHeader />
    <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
      Welcome to the Pointr newsletter
    </Heading>
    <Text className="mb-4 text-xl">
      You&apos;re now subscribed to Pointr updates.
    </Text>
    <Text className="mb-4 text-xl">
      We&apos;ll send product launches, tips, and curated tutorials to{" "}
      <b>{email}</b>.
    </Text>

    <Text className="text-sm leading-6 text-black">
      You can{" "}
      <Link
        className="text-sm break-all text-[#1d1c1d] underline"
        href={managePreferencesUrl}
      >
        {" "}
        update your subscription preferences{" "}
      </Link>
      at any time.
    </Text>

    <EmailFooter />
  </EmailLayout>
);

NewsletterEmail.PreviewProps = {
  email: "avery@pointr.dev",
  managePreferencesUrl: "http://localhost:3000/settings/notifications",
} as NewsletterEmailProps;

export default NewsletterEmail;
