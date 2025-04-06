import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { usersTable } from "./db/schema";

const connectionString = process.env.DATABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString as string, {
  prepare: false,
});
const db = drizzle(client);

await db.select().from(usersTable);
