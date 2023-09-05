import pkg from "pg";

const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "catChat",
  password: "postgres",
  port: 5432,
});
