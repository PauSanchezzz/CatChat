import pool from "../DB/conection.js";

export class UserRepo {
  async create(correo, clave, nomUsuario, raza) {
    return await pool.query(
      `INSERT INTO USUARIOS (correo,clave,nomUsuario,idRaza) VALUES (${correo},${clave},${nomUsuario},${raza});`
    );
  }

  async findOne(correo) {
    return await pool.query(
      `SELECT correo WHERE correo=${correo} FROM USUARIOS;`
    );
  }
}
