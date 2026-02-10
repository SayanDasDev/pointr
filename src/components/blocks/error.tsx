import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

type ErrorContentProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  icon?: React.ReactNode;
  href?: string;
};

const ErrorContent = ({
  title,
  subtitle,
  description,
  buttonText = "Back to home",
  icon = <IconArrowLeft className="mr-2 h-5 w-5" />,
  href = "/",
}: ErrorContentProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <h2 className="mb-6 text-5xl font-semibold">{title}</h2>
      <h3 className="mb-1.5 text-3xl font-semibold">{subtitle}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm">{description}</p>

      <Button size="lg" className="rounded-lg text-base">
        <Link href={href} className="flex items-center gap-0.5">
          {icon}
          {buttonText}
        </Link>
      </Button>
    </div>
  );
};

export default ErrorContent;
