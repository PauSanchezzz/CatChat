import { CatRepo } from "../repository/cat.repository.js";

const catRepo = new CatRepo();
export const getRaza = async () => {
  const query = await catRepo.findAll();
  return query.rows;
};
