import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const threadsTable = pgTable("threads", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdBy: integer().references(() => usersTable.id),
  title: varchar({ length: 255 }).notNull(),
  tag: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 3000 }).notNull(),
  upvotes: integer(),
  downvotes: integer(),
});

export const comments = pgTable("comments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  threadID: integer().references(() => threadsTable.id),
  content: varchar({ length: 3000 }).notNull(),
  upvotes: integer(),
  downvotes: integer(),
});
