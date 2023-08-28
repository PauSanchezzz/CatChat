import { Router } from "express";
import { getRazas } from "../controllers/cat.controller.js";

const router = new Router();

router.get("/razasGatos", getRazas);

export default router;
