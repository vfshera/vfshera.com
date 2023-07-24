import { getTime } from "@/utils";
import jobs from "./jobs";
import cron from "node-cron";
import logger from "@/utils/logger";

export const schedule = cron.schedule(
  "* * * * *",
  () => {
    console.log();

    jobs.forEach((job) => {
      logger.info("🚀 Running ", job.name, getTime());
      try {
        job.callback();
      } catch (error) {
        logger.error("Failed to run ", job.name, error);
      }
    });
  },
  { timezone: "Africa/Nairobi", scheduled: false }
);
