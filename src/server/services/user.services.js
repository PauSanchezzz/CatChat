import { UserRepo } from "../repository/users.repository.js";
import { hash, compare } from "bcrypt";

const userRepo = new UserRepo();

export const getUser = async (correo) => {
  const data = await userRepo.findOne(correo);
  if (data.severity) {
    return false;
  }
  return data.rows;
};

export const create = async (correo, clave, nomUsuario, raza) => {
  const claveEncriptada = await hash(clave, 10);
  const userCreated = await userRepo.create(
    correo,
    claveEncriptada,
    nomUsuario,
    raza
  );
  if (userCreated.severity) {
    return false;
  }
  return userCreated;
};

export const getUserLogin = async (correo, clave) => {
  const userLogin = await userRepo.findUser(correo);
  console.log("user login: " + userLogin.rows.length);
  if (userLogin.rows.length === 0) {
    return false;
  }
  const compara = await compare(clave, userLogin.rows[0].clave);
  console.log("compara: " + compara);
  if (compara) {
    return correo;
  } else {
    return false;
  }
};
