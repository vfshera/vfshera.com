import { type Contact } from "@/db";
import { getUnsentContacts, markSent } from "@/db";
import { transporter } from "../mailer";

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
      text:
        "Thank you for your message. I'll get back to you soon. " +
        contact.email,
      html: "<b>Thank you for your message. I'll get back to you soon.</b>",
    })
    .catch(console.error);
}
async function sendContactMessage(contact: Contact) {
  transporter
    .sendMail({
      from: '"Fred Foo 👻" <frank@mail.com>',
      to: process.env.MAIL_CC_ADDRESS,
      subject: `You have a message from ${contact.name} (${contact.email})`,
      text: "Hello world?",
      html: `<p>${contact.message}</p>`,
    })
    .catch(console.error);
}
