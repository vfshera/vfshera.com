import { drizzle } from "drizzle-orm/mysql2";
// import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DATABASE,
});

const db = drizzle(connection);

// (async () => {
//   if (process.env.DEV) {
//     console.log();
//     console.log("DRIZZLE: ⚡ Running migrations");
//     await migrate(db, { migrationsFolder: "./drizzle" });
//     console.log("DRIZZLE: Done ✅");
//     console.log();
//   }
// })();

export * from "./queries";
export * from "./schema";

export { db };
