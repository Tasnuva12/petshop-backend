import { z } from "zod";
import dotenv from "dotenv";
import { expand } from "dotenv-expand";

expand(dotenv.config());

const envSchema = z.object({
  PORT: z.string().default("3000"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  MONGO_URL: z.string().optional(),
});

// ✅ Create and export env
export const env = envSchema.parse(process.env);
