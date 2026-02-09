import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Icons } from "../icons";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Github", href: "https://github.com/SayanDasDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/das-sayan/" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Start building the future today
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Pointr is the fit-for-purpose tool for coding and shipping modern
          software directly from the web.
        </p>
        <div>
          <Button size="lg" className="mx-auto mt-4 flex items-center gap-1">
            <Link target="_blank" href="/editor">
              Launch Editor
            </Link>
            <IconArrowUpRight />
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target="_blank"
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
                <IconArrowUpRight size={16} />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <Icons.FooterText className="w-full" />
      </div>
    </footer>
  );
}
