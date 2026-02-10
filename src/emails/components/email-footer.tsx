/* eslint-disable n/no-process-env */
import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  iconPath: string;
}

interface EmailFooterProps {
  links?: FooterLink[];
  socialLinks?: SocialLink[];
  companyName?: string;
  companyAddressLines?: string[];
  appName?: string;
  logoPath?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const defaultLinks: FooterLink[] = [
  // { label: "Our blog", href: "https://pointrhq.com" },
  { label: "Policies", href: "https://pointr.com/legal" },
  { label: "Help center", href: "https://pointr.com/help" },
  // { label: "Pointr Community", href: "https://pointr.com/community" },
];

const defaultSocialLinks: SocialLink[] = [
  // {
  //   label: "Twitter",
  //   href: "https://x.com",
  //   iconPath: "/static/pointr-twitter.png",
  // },
  // {
  //   label: "Facebook",
  //   href: "https://facebook.com",
  //   iconPath: "/static/pointr-facebook.png",
  // },
  {
    label: "Github",
    href: "https://github.com/SayanDasDev/pointr",
    iconPath: "/static/pointr-github.png",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/das-sayan",
    iconPath: "/static/pointr-linkedin.png",
  },
];

export function EmailFooter({
  links = defaultLinks,
  socialLinks = defaultSocialLinks,
  companyName = "SayanDasDev",
  companyAddressLines = ["Salt Lake, Kolkata 700101, West Bengal, India"],
  appName = "Pointr",
  logoPath = "/static/pointr-logo-with-text.png",
}: EmailFooterProps) {
  return (
    <>
      <Section>
        <Row className="mb-8 pr-2 pl-2">
          <Column className="w-2/3">
            <Img
              src={`${baseUrl}${logoPath}`}
              width="98"
              height="36"
              alt={appName}
            />
          </Column>
          <Column align="right">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Img
                  src={`${baseUrl}${link.iconPath}`}
                  width="24"
                  height="24"
                  alt={link.label}
                  className="ml-2 inline"
                />
              </Link>
            ))}
          </Column>
        </Row>
      </Section>

      <Section>
        <Text className="text-sm text-[#b7b7b7]">
          {links.map((link, index) => (
            <span key={link.label}>
              <Link
                className="text-[#b7b7b7] underline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
              {index < links.length - 1 ? " · " : ""}
            </span>
          ))}
        </Text>
        <Text className="mb-12.5 text-left text-xs leading-3.75 text-[#b7b7b7]">
          ©2026 {companyName}. <br />
          {companyAddressLines.join(" ")} <br />
          <br />
          All rights reserved.
        </Text>
      </Section>
    </>
  );
}
