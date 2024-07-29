import { createTransport } from "nodemailer";
import hbs, { type HbsTransporter } from "nodemailer-express-handlebars";
import env from "./env";

const transporter: HbsTransporter = createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: true,
  auth: {
    user: env.MAIL_USERNAME,
    pass: env.MAIL_PASSWORD,
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
