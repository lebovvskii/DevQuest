import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "postgres://postgres:postgres@localhost:5432/devquest",
  },
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/shared/db/schema.ts",
  strict: true,
  verbose: true,
});
