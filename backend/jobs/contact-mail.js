import { transporter } from "../mailer.js";
import { Contact } from "../database.js";

export default async function sendEmails() {
  console.log();
  console.log("🌟 Checking contacts...");

  const unsentMails = await Contact.findAll({ where: { sent: 0 } });

  if (unsentMails.length == 0) {
    console.log("💤 No tasks available");
    return;
  }

  console.log(`📬 ${unsentMails.length} are unsent!`);

  unsentMails.forEach(async (mail, index) => {
    console.log(`📨 Mail sent to ${mail.name} `);
    await sendThankYouMail(mail);
    await sendContactMessage(mail);
    await mail.update({ sent: 1 });
  });
}

async function sendThankYouMail(contact) {
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
async function sendContactMessage(contact) {
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
