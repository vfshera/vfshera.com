import express from "express";
import cron from "node-cron";
import "dotenv/config";

import { handler as ssrHandler } from "../dist/server/entry.mjs";

import jobs from "./jobs/index.js";

const app = express();
app.disable("x-powered-by");

app.use(express.static("dist/client/"));
app.use(ssrHandler);

const schedule = cron.schedule(
  "*/15 * * * * *",
  () => {
    console.log();
    console.log("🚀 Start Running Tasks : ", new Date().toLocaleTimeString());

    jobs.forEach((job, index) => {
      try {
        job();
      } catch (error) {
        console.log("Failed to run task ", index + 1);
        console.log(error.message);
      }
    });

    console.log("✅ Done Running Tasks : ", new Date().toLocaleTimeString());
  },
  { timezone: "Africa/Nairobi", scheduled: false }
);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
  schedule.start();
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  schedule.stop();
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
  });
});
