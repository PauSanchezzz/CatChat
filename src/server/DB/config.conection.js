export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
export const DB_NAME = process.env.DB_NAME || "catChat";
export const DB_PORT = process.env.DB_PORT || 5432;

console.log("DB_HOST" + DB_HOST);
console.log("DB_USER" + DB_USER);
console.log("DB_PASSWORD" + DB_PASSWORD);
console.log("DB_NAME" + DB_NAME);
console.log("DB_PORT" + DB_PORT);
