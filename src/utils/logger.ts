import * as winston from "winston";

import DailyRotateFile from "winston-daily-rotate-file";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

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
  level: level(),
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
