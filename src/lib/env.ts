import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string(),
});

export type Env = z.infer<typeof envSchema>;
export let env = {} as Env;

try {
  env = envSchema.parse(import.meta.env);
} catch (e) {
  throw new Error(`Please insert the correct env vars. ${e}`);
}
