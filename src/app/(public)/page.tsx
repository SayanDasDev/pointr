"use client";
import { Background } from "@/components/background";
import { Hero } from "@/components/blocks/hero";
import { Navbar } from "@/components/blocks/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Background className="via-muted to-muted/80">
        <Hero />
      </Background>
    </>
  );
}
