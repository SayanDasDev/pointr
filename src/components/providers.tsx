"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./theme-provider";

// eslint-disable-next-line n/no-process-env
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ConvexProvider client={convex}>{children}</ConvexProvider>
      <Toaster />
    </ThemeProvider>
  );
}
