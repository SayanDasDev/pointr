import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerifyEmailProps {
  validationCode?: string;
}

// eslint-disable-next-line n/no-process-env
const baseUrl = process.env.ASSETS_URL || "";

export const VerifyEmail = ({ validationCode }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
      }}
    >
      <Body className="mx-auto my-0 bg-white font-sans">
        <Preview>Confirm your email address</Preview>
        <Container className="mx-auto my-0 px-5 py-0">
          <Section className="mt-8">
            <Img
              src={`${baseUrl}/pointr-logo.png`}
              width="120"
              height="36"
              alt="Pointr"
            />
          </Section>
          <Heading className="mx-0 my-7.5 p-0 text-4xl leading-10.5 font-bold text-[#1d1c1d]">
            Confirm your email address
          </Heading>
          <Text className="mb-7.5 text-xl">
            Your confirmation code is below - enter it in your open browser
            window and we&apos;ll help you get signed in.
          </Text>

          <Section className="mb-7.5 rounded bg-[rgb(245,244,245)] px-2.5 py-10">
            <Text className="text-center align-middle text-3xl leading-6">
              {validationCode}
            </Text>
          </Section>

          <Text className="text-sm leading-6 text-black">
            If you didn&apos;t request this email, there&apos;s nothing to worry
            about, you can safely ignore it.
          </Text>

          <Section>
            <Row className="mb-8 pr-2 pl-2">
              <Column className="w-2/3">
                <Img
                  src={`${baseUrl}/static/pointr-logo.png`}
                  width="120"
                  height="36"
                  alt="Pointr"
                />
              </Column>
              <Column align="right">
                <Link href="/">
                  <Img
                    src={`${baseUrl}/static/pointr-twitter.png`}
                    width="32"
                    height="32"
                    alt="Pointr"
                    className="ml-2 inline"
                  />
                </Link>
                <Link href="/">
                  <Img
                    src={`${baseUrl}/static/pointr-facebook.png`}
                    width="32"
                    height="32"
                    alt="Pointr"
                    className="ml-2 inline"
                  />
                </Link>
                <Link href="/">
                  <Img
                    src={`${baseUrl}/static/pointr-linkedin.png`}
                    width="32"
                    height="32"
                    alt="Pointr"
                    className="ml-2 inline"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              className="text-[#b7b7b7] underline"
              href="https://pointrhq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our blog
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://pointr.com/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policies
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://pointr.com/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              className="text-[#b7b7b7] underline"
              href="https://pointr.com/community"
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Pointr Community
            </Link>
            <Text className="mb-12.5 text-left text-xs leading-3.75 text-[#b7b7b7]">
              ©2022 Pointr Technologies, LLC, a Salesforce company. <br />
              500 Howard Street, San Francisco, CA 94105, USA <br />
              <br />
              All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

VerifyEmail.PreviewProps = {
  validationCode: "DJZ-TLX",
} as VerifyEmailProps;

export default VerifyEmail;
