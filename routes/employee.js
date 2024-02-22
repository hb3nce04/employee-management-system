import { Router } from "express";

import { getAllEmployees } from "../controllers/employee.js";

const router = Router();

router.get("/", getAllEmployees);

export default router;
