import { Router } from "express";
import { login, signin } from "../controllers/auth.controller.js";

const router = new Router();

router.post("/auth/login", login);
router.post("/auth/signin", signin);

export default router;
