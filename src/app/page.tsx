import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto">
      <Icons.Logo className="w-12 h-12 mx-auto" />
      <h1 className="text-3xl font-bold text-center">Welcome to Pointr</h1>
      <Button>Get Started</Button>
    </div>
  );
}
