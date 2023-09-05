import { pool } from "../DB/conection.js";

export class CatRepo {
  async findAll() {
    return await pool.query(`SELECT nombreraza,imagen from razas;`);
  }
}
