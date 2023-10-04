import pkg from "pg";
import {
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
} from "./config.conection.js";

const { Pool } = pkg;

export const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});
