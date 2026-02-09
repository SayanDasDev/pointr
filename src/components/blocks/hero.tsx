import Image from "next/image";
import Link from "next/link";

import {
  IconArrowUpRight,
  IconCircleDot,
  IconCloudBolt,
  IconEyeCheck,
  IconUsers,
} from "@tabler/icons-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Zero Setup",
    description: "Spin up a full dev environment in seconds.",
    icon: IconCircleDot,
  },
  {
    title: "Cloud Compute",
    description:
      "Offload compilation to our servers. Save your laptop battery.",
    icon: IconCloudBolt,
  },
  {
    title: "Real-time Collaboration",
    description: "Code with your team in the same file, at the same time.",
    icon: IconUsers,
  },
  {
    title: "Instant Previews",
    description: "Get a live URL for every change you make, instantly.",
    icon: IconEyeCheck,
  },
];

export const Hero = () => {
  return (
    <section className="content-grid py-28 lg:py-32 lg:pt-44">
      <div className="breakout flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Pointr Browser IDE
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Pointr is an open-source web IDE built with WASM, Cloud Containers &
            AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button size={"lg"}>
              <Link href="/editor">Launch Editor</Link>
            </Button>
            <Button
              size={"lg"}
              variant="outline"
              className="from-background gap-2 bg-linear-to-r to-transparent shadow-md"
            >
              <Link
                href="https://github.com/SayanDasDev/pointr"
                className="flex max-w-56 gap-1 truncate text-start md:max-w-none"
              >
                Visit Source Code
                <IconArrowUpRight className="stroke-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="breakout mx-auto mt-12 hidden max-lg:ml-6 max-lg:h-137.5 max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24 lg:block">
        <div className="relative h-187.5">
          <Image
            src="/assets/hero.jpg"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-top-left shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
