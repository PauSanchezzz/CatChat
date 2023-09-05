import { getRaza } from "../services/cat.services.js";
export const getRazas = async (req, res) => {
  const arrayRazas = await getRaza();
  if (arrayRazas) {
    res.status(200).json(arrayRazas);
  }
};
