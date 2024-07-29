/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Fastify server when building for production.
 *
 * Learn more about Node.js server integrations here:
 * - https://qwik.dev/docs/deployments/node/
 *
 */
import { type PlatformNode } from "@builder.io/qwik-city/middleware/node";
import "dotenv/config";
import Fastify, { type FastifyServerOptions } from "fastify";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import FastifyQwik from "./plugins/fastify-qwik";
import closeWithGrace from "close-with-grace";
import logger from "~/utils/logger";
import { getTime } from "./utils";
import { schedule } from "./cron";

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

// Allow for dynamic port and host
const PORT = parseInt(process.env.PORT ?? "3000");
const HOST = process.env.HOST ?? "0.0.0.0";

const fastifyOptions: FastifyServerOptions = {};

if (process.stdout.isTTY) {
  fastifyOptions.logger = {
    level: "debug",
    transport: {
      target: "@fastify/one-line-logger",
    },
  };
} else {
  fastifyOptions.logger = true;
}

const start = async () => {
  const fastify = Fastify(fastifyOptions);

  await fastify.register(import("@fastify/helmet"), {
    referrerPolicy: {
      policy: "origin",
    },
    contentSecurityPolicy: false,
  });

  await fastify.register(import("@fastify/compress"));

  await fastify.register(FastifyQwik, { distDir, buildDir });

  closeWithGrace(async function ({ signal, err }) {
    if (err) {
      logger.error(
        `[${getTime()}] server closing with error : ${JSON.stringify(err, null, 2)}`
      );
    } else {
      logger.info(`[${getTime()}] ${signal} received, server closing`);
    }

    schedule.stop();

    await fastify.close();
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await fastify.listen({ port: PORT, host: HOST }, (err, address) => {
    if (err) {
      logger.error(JSON.stringify(err, null, 2));
      process.exit(1);
    }

    schedule.start();
  });
};

start();
