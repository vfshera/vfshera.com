import {
  mysqlTable,
  int,
  timestamp,
  varchar,
  longtext,
  boolean,
} from "drizzle-orm/mysql-core";
import type { InferModel } from "drizzle-orm";

export type Contact = InferModel<typeof contacts>;
export type NewContact = InferModel<typeof contacts, "insert">;

export const contacts = mysqlTable("contacts", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 40 }).notNull(),
  email: varchar("email", { length: 30 }).notNull(),
  message: longtext("message").notNull(),
  sent: boolean("sent").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
