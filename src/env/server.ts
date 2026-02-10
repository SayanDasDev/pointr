/* eslint-disable no-console */
import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodRealError } from "zod";

export const env = createEnv({
  server: {
    CONVEX_SELF_HOSTED_URL: z.url(),
    CONVEX_SELF_HOSTED_ADMIN_KEY: z.string().min(1),
  },
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
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
