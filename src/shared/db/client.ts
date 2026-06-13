import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env, isDatabaseConfigured } from "@/shared/config/env";

import * as schema from "./schema";

const createDatabase = (databaseUrl: string) => {
  const client = postgres(databaseUrl, {
    prepare: false,
  });

  return {
    client,
    db: drizzle(client, { schema }),
  };
};

type DatabaseBundle = ReturnType<typeof createDatabase>;

declare global {
  var __devquestDatabase__: DatabaseBundle | undefined;
}

export const getDatabase = () => {
  if (!isDatabaseConfigured || !env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (globalThis.__devquestDatabase__) {
    return globalThis.__devquestDatabase__;
  }

  const database = createDatabase(env.DATABASE_URL);

  if (env.NODE_ENV !== "production") {
    globalThis.__devquestDatabase__ = database;
  }

  return database;
};
