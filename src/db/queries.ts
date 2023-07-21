import { sql } from "drizzle-orm";
import { db } from ".";

import { type Contact, type NewContact, contacts } from "./schema";

export async function getAllContacts() {
  const allContacts: Contact[] = await db.select().from(contacts);

  return allContacts;
}
export async function getUnsentContacts() {
  const unsentContacts: Contact[] = await db
    .select()
    .from(contacts)
    .where(sql`${contacts.sent} = 0`);

  return unsentContacts;
}

export async function createContact(data: NewContact) {
  return db.insert(contacts).values(data);
}
