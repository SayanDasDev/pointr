import type { ReactNode } from "react";

import {
  Body,
  Container,
  Head,
  Html,
  pixelBasedPreset,
  Preview,
  Tailwind,
} from "@react-email/components";

interface EmailLayoutProps {
  preview: string;
  children: ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-0 bg-white font-sans">
          <Preview>{preview}</Preview>
          <Container className="mx-auto my-0 px-5 py-0">{children}</Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
