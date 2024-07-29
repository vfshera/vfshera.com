import { migrate } from "drizzle-orm/mysql2/migrator";
import { connection, db } from ".";
import env from "~/env";
import config from "$/drizzle.config";

if (!env.DB_MIGRATING) {
  throw new Error(
    'You must set DB_MIGRATING to "true" when running migrations'
  );
}

(async () => {
  console.log();
  console.log("DRIZZLE: ⚡ Running migrations");
  await migrate(db, { migrationsFolder: config.out || "./drizzle" });
  console.log("DRIZZLE: Closing...");
  await connection.end();
  console.log("DRIZZLE: Done ✅");
  console.log();
})();
