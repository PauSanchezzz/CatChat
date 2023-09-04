import { pool } from "../DB/conection.js";

export class UserRepo {
  async create(correo, clave, nomUsuario, raza) {
    try {
      return await pool.query(
        `INSERT INTO USUARIOS (correo, clave, nomusuario, idRaza)
  VALUES ('${correo}', '${clave}', '${nomUsuario}', (SELECT idRaza FROM RAZAS WHERE nombreraza = '${raza}'));`
      );
    } catch (error) {
      return error;
    }
  }

  async findOne(correo) {
    try {
      return await pool.query(
        `SELECT correo,nomusuario,r.nombreraza,r.imagen FROM USUARIOS as u join razas as r on u.idraza = r.idraza  
      WHERE correo='${correo}';`
      );
    } catch (error) {
      return error;
    }
  }

  async findUser(correo) {
    try {
      return await pool.query(
        `SELECT correo,clave FROM USUARIOS WHERE correo='${correo}';`
      );
    } catch (error) {
      return error;
    }
  }
}
