import { type Contact } from "~/db/schema";
import { getUnsentContacts, markSent } from "~/db/queries";
import { transporter } from "~/mailer";
import { getTime } from "~/utils";
import logger from "~/utils/logger";
import env from "~/env";

/**
 *
 * Send mail to me and contacts
 *
 */
async function sendEmails() {
  console.log("🌟 Checking contacts", getTime());

  const unsentContacts = await getUnsentContacts();

  if (unsentContacts.length == 0) {
    console.log("💤 No contacts to send", getTime());
    return;
  }

  unsentContacts.forEach(async (contact) => {
    try {
      await sendThankYouMail(contact);
      await sendContactMessage(contact);
      await markSent(contact.id);
    } catch (error) {
      logger.error(error);
    }
  });

  console.log(
    `📨 Finished sending ${unsentContacts.length} contact(s) `,
    getTime()
  );
}
/**
 * Sen thankyou mail
 * @param contact
 */
async function sendThankYouMail(contact: Contact) {
  transporter
    .sendMail({
      from: `"${env.MAIL_FROM_NAME}" <${env.MAIL_FROM_ADDRESS}>`,
      to: contact.email,
      subject: `Thankyou ${contact.name} for reaching out`,
      template: "thankyou",
      text: "Thanks for contacting us through our website.I'll get back to you shortly.",
      context: {
        name: contact.name,
        signName: env.MAIL_FROM_NAME,
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
      to: env.MAIL_CC_ADDRESS,
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

export default { name: "Send Contact Emails", callback: sendEmails };
