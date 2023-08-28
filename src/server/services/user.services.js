import { UserRepo } from "../repository/users.repository.js";

const userRepo = new UserRepo();
export const getUser = async (correo) => {
  await userRepo.findOne(correo);
};
