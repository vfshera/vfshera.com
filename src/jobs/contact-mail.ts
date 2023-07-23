import { type Contact } from "@/db";
import { getUnsentContacts, markSent } from "@/db";
import { transporter } from "@/mail/mailer";

export default async function sendEmails() {
  console.log();
  console.log("🌟 Checking tasks");

  const unsentContacts = await getUnsentContacts();

  if (unsentContacts.length == 0) {
    console.log("💤 No tasks available");
    return;
  }

  unsentContacts.forEach(async (contact) => {
    await sendThankYouMail(contact);
    await sendContactMessage(contact);
    await markSent(contact.id);
  });
}

async function sendThankYouMail(contact: Contact) {
  transporter
    .sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_CC_ADDRESS,
      subject: `Thankyou ${contact.name} for reaching out`,
      template: "thankyou",
      context: {
        name: contact.name,
        signName: process.env.MAIL_FROM_NAME,
      },
    })
    .catch(console.error);
}
async function sendContactMessage(contact: Contact) {
  transporter
    .sendMail({
      from: `"${contact.name}" <frank@mail.com>`,
      to: process.env.MAIL_CC_ADDRESS,
      subject: `You have a message from ${contact.name} (${contact.email})`,
      template: "new-contact",
      context: {
        contact,
        sentAt: contact.createdAt?.toLocaleTimeString(),
      },
    })
    .catch(console.error);
}
