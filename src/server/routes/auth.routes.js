import { Router } from "express";
import { getOne, login, signin } from "../controllers/auth.controller.js";

const router = new Router();

router.post("/auth/login", login);
router.post("/auth/signin", signin);
router.get("/user/:correo", getOne);

export default router;
