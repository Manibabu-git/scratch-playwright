import { test, expect } from "@playwright/test";
import { dev } from "../config/dev";
import { qa } from "../config/qa";
const env = process.env.ENV || "qa";
const config = {
  qa,
  dev,
};
export const envConfig = config[env];
