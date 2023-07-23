import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

transporter.use(
  "compile",
  hbs({
    extName: ".hbs",
    viewPath: "templates",
    viewEngine: {
      extname: ".hbs",
      layoutsDir: "templates",
      partialsDir: "templates",
    },
  })
);

export { transporter };
