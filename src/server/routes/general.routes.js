import { Router } from "express";
import cats from "./cat.routes.js";
import auth from "./auth.routes.js";

const router = new Router();

router.use("/api", cats, auth);

export default router;
