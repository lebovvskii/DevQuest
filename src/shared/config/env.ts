import { z } from "zod";

const optionalStringSchema = z.preprocess((value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  return trimmedValue.length > 0 ? trimmedValue : undefined;
}, z.string().min(1).optional());

const envSchema = z.object({
  DATABASE_URL: optionalStringSchema,
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

export const isDatabaseConfigured = typeof env.DATABASE_URL === "string";
