import { config } from "dotenv";
import { expand } from "dotenv-expand";
import Table from "cli-table3";

import { z } from "zod";

const stringBoolean = z.coerce
  .string()
  .transform((val) => {
    return val === "true";
  })
  .default("false");

const EnvSchema = z.object({
  DOMAIN: z.string().url(),
  DB_NAME: z.string().min(1),
  DB_HOST: z.string().min(1),
  DB_USER: z.string().min(1),
  DB_PASS: z.string().min(8),
  MAIL_HOST: z.string().min(1),
  MAIL_PORT: z.coerce.number(),
  MAIL_PASSWORD: z.string().min(8),
  MAIL_FROM_NAME: z.string(),
  MAIL_FROM_ADDRESS: z.string().email(),
  MAIL_CC_ADDRESS: z.string().email(),
  MAIL_USERNAME: z.string().email(),
  DB_MIGRATING: stringBoolean,
});

export type EnvSchema = z.infer<typeof EnvSchema>;

expand(config());
const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  const table = new Table({ head: ["Variable", "Errors"] });

  const flatErrors = error.flatten().fieldErrors;

  for (const [key, value] of Object.entries(flatErrors)) {
    table.push([key, value.map((v) => `\u00B7 ${v}`).join("\n")]);
  }

  console.error("❌ Invalid env:");
  console.log(table.toString());
  process.exit(1);
}

export default env!;
