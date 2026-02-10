/* eslint-disable no-console */
/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodRealError } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.url(),
    NEXT_PUBLIC_BASE_URL: z.url(),
    NEXT_PUBLIC_CONVEX_URL: z.url(),
    NEXT_PUBLIC_CONVEX_SITE_URL: z.url(),
    NEXT_PUBLIC_ASSETS_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CONVEX_SITE_URL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
    NEXT_PUBLIC_ASSETS_URL: process.env.NEXT_PUBLIC_ASSETS_URL,
  },
  onValidationError: (error) => {
    if (error instanceof ZodRealError) {
      console.error(
        "❌ Invalid environment variables: \n",
        z.treeifyError(error),
      );
    } else {
      console.error("❌ Invalid environment variables:", error);
    }
    throw new Error("Environment validation failed");
  },
});
