import { Router } from "express";

import { getAllUsers, createUsers } from "../controllers/user.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/create", createUsers);

export default router;
