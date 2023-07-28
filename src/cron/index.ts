import jobs from "./jobs";
import cron from "node-cron";
import logger from "@/utils/logger";

export const schedule = cron.schedule(
  "* * * * *",
  () => {
    for (const job of jobs) {
      logger.info("🚀 Running " + job.name);
      try {
        job.callback();
      } catch (error) {
        logger.error("Failed to run " + job.name);
      }
    }
  },
  { timezone: "Africa/Nairobi", scheduled: false }
);
