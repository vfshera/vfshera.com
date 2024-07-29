import { eq } from "drizzle-orm";
import { db } from ".";

import { type NewContact, contacts } from "./schema";

export async function getAllContacts() {
  return db.query.contacts.findMany();
}
export async function getUnsentContacts() {
  return db.query.contacts.findMany({
    where: (post, { eq }) => eq(post.sent, false),
  });
}

export async function markSent(id: number) {
  return await db
    .update(contacts)
    .set({ sent: true })
    .where(eq(contacts.id, id));
}

export async function createContact(data: NewContact) {
  return db.insert(contacts).values(data);
}
