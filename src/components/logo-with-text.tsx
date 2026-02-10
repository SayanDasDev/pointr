import { Icons } from "./icons";

import { cn } from "@/lib/utils";

const LogoWithText = ({
  className,
  size = 6,
  ...props
}: React.ComponentProps<"div"> & { size?: number }) => {
  return (
    <div
      className={cn("flex items-center gap-1.5 text-2xl", className)}
      {...props}
    >
      <Icons.Logo className={`size-${size}`} />
      <span className="font-nunito mb-1 font-bold tracking-tight">pointr</span>
    </div>
  );
};

export default LogoWithText;
