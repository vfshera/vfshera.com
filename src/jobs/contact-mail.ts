import { type Contact } from "@/db";
import { getUnsentContacts, markSent } from "@/db";
import { transporter } from "@/mailer";

/**
 *
 * Send mail to me and contacts
 *
 */
export default async function sendEmails() {
  console.log("🌟 Checking contacts");

  const unsentContacts = await getUnsentContacts();

  if (unsentContacts.length == 0) {
    console.log("💤 No contacts to send");
    return;
  }

  unsentContacts.forEach(async (contact) => {
    try {
      await sendThankYouMail(contact);
      await sendContactMessage(contact);
      await markSent(contact.id);
    } catch (error) {
      console.log(error);
    }
  });

  console.log(`📨 Finished sending ${unsentContacts.length} contact(s)`);
}
/**
 * Sen thanyou mail
 * @param contact
 */
async function sendThankYouMail(contact: Contact) {
  transporter
    .sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: contact.email,
      subject: `Thankyou ${contact.name} for reaching out`,
      template: "thankyou",
      text: "Thanks for contacting us through our website.I'll get back to you shortly.",
      context: {
        name: contact.name,
        signName: process.env.MAIL_FROM_NAME,
      },
    })
    .catch(console.error);
}

/**
 * Send contact message to me
 * @param contact
 */
async function sendContactMessage(contact: Contact) {
  transporter
    .sendMail({
      from: `"${contact.name}" <${contact.email}>`,
      to: process.env.MAIL_CC_ADDRESS,
      subject: `You have a message from ${contact.name} (${contact.email})`,
      template: "new-contact",
      text: contact.message,
      context: {
        contact,
        sentAt: contact.createdAt?.toLocaleTimeString(),
      },
    })
    .catch(console.error);
}
