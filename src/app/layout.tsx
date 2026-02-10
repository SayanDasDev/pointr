import { JetBrains_Mono, Nunito, Nunito_Sans } from "next/font/google";

import type { Metadata } from "next";

import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const nunitoSans = Nunito_Sans({ variable: "--font-sans" });
const nunito = Nunito({ variable: "--font-nunito" });

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  appleWebApp: {
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} ${nunito.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
