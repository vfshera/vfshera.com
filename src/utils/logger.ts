import * as winston from "winston";

import DailyRotateFile from "winston-daily-rotate-file";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
};

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.json()
);

const fileTransport: DailyRotateFile = new DailyRotateFile({
  filename: "%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "10m",
  maxFiles: "14d",
  dirname: "logs",
});

const logger = winston.createLogger({
  level: "info",
  levels,
  format,
  transports: [fileTransport, new winston.transports.Console()],
  exitOnError: false,
  exceptionHandlers: [
    new winston.transports.File({
      filename: "exceptions.log",
      dirname: "logs",
    }),
  ],
});

export default logger;
