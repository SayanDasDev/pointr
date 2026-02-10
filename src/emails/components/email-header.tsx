/* eslint-disable n/no-process-env */
import { Img, Section } from "@react-email/components";

interface EmailHeaderProps {
  appName?: string;
  logoPath?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export function EmailHeader({
  appName = "Pointr",
  logoPath = "/static/pointr-logo-with-text.png",
}: EmailHeaderProps) {
  return (
    <Section className="mt-8">
      <Img src={`${baseUrl}${logoPath}`} width="98" height="36" alt={appName} />
    </Section>
  );
}
