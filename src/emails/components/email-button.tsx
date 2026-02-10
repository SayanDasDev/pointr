import { Link, Section } from "@react-email/components";

interface EmailButtonProps {
  href: string;
  label: string;
}

export function EmailButton({ href, label }: EmailButtonProps) {
  return (
    <Section className="my-6">
      <Link
        className="inline-block rounded-lg bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white no-underline"
        href={href}
      >
        {label}
      </Link>
    </Section>
  );
}
