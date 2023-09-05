import { getUser } from "../services/user.services.js";
import { create } from "../services/user.services.js";
import { getUserLogin } from "../services/user.services.js";

export const login = async (req, res) => {
  const { correo, clave } = req.body;
  const userLogin = await getUserLogin(correo, clave);
  if (userLogin === false) {
    return res.status(400).json({ message: "Usuario Incorrecto" });
  }
  return res.status(200).json({ message: "El usuario es correcto" });
};

export const signin = async (req, res) => {
  const { correo, clave, nomUsuario, raza } = req.body;

  const newUser = await create(correo, clave, nomUsuario, raza);
  if (newUser === false) {
    return res.status(400).json({ message: "Usuario no creado" });
  }
  return res.status(201).json(newUser[0]);
};

export const getOne = async (req, res) => {
  const { correo } = req.params;

  const user = await getUser(correo);
  const vacio = Object.keys(user).length === 0;
  console.log("vacio" + vacio);
  if (vacio) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.status(200).json({ message: "Usuario encontrado", usuario: user });
};
