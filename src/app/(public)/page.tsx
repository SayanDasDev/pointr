"use client";

import { Background } from "@/components/background";
import { Hero } from "@/components/blocks/hero";
import { Navbar } from "@/components/blocks/navbar";
import Newsletter from "@/components/blocks/newsletter";

export default function Page() {
  return (
    <>
      <Navbar />
      <Background className="">
        <Hero />
        <Newsletter />
      </Background>
    </>
  );
}
