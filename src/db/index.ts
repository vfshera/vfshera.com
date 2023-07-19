import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: import.meta.env.DBHOST,
  user: import.meta.env.DBUSER,
  password: import.meta.env.DBPASS,
  database: import.meta.env.DATABASE,
});

const db = drizzle(connection);

(async () => {
  if (import.meta.env.DEV) {
    console.log("DRIZZLE: ⚡ Running migrations");
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("DRIZZLE: Done ✅");
  }
})();

export * from "./queries";

export { db };
