import { drizzle } from "drizzle-orm/mysql2";
import env from "~/env";
import mysql from "mysql2";

import * as schema from "./schema";

export const connection = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  multipleStatements: env.DB_MIGRATING ? true : undefined,
});

export const db = drizzle(connection, { schema, mode: "default" });
