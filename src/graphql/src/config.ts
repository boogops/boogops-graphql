/* eslint-disable no-process-env */
import * as dotenv from "dotenv";

export interface Config {
  PORT: number;
  API_URI: string;
}

export function getConfig(): Config {
  dotenv.config();

  const port = parseInt(process.env.PORT ?? "4000", 10);
  const apiUri = process.env.API_URI ?? "http://localhost:5000";

  return {
    PORT: port,
    API_URI: apiUri,
  };
}
