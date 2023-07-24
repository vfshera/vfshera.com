import {
  createQwikCity,
  type PlatformNode,
} from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";
import express from "express";
import "dotenv/config";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import compression from "compression";

import logger from "@/utils/logger";
import { schedule } from "./cron";

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

const PORT = process.env.PORT ?? 3000;

const { router, notFound } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
});

const app = express();

app.use(compression());
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(distDir, { redirect: false }));

app.use(router);

app.use(notFound);

const server = app.listen(PORT, () => {
  /* eslint-disable */
  schedule.start();
});

process.on("SIGTERM", () => {
  logger.warn("SIGTERM signal received.");
  schedule.stop();
  logger.warn("Closing http server.");
  server.close(() => {
    logger.warn("Http server closed.");
  });
});
