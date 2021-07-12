import express from "express";

import { registerUsers, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", registerUsers);

router.post("/login", login)

export default router;