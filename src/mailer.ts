import { createTransport } from "nodemailer";
import hbs, { type HbsTransporter } from "nodemailer-express-handlebars";

const transporter: HbsTransporter = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
}).use(
  "compile",
  hbs({
    extName: ".hbs",
    viewPath: "mail/templates",
    viewEngine: {
      extname: ".hbs",
      defaultLayout: "",
    },
  })
);

export { transporter };
