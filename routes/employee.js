import { Router } from "express";

import { getAllEmployees, editEmployeeByID } from "../controllers/employee.js";

const router = Router();

router.get("/", getAllEmployees);
router.get("/edit/:id", editEmployeeByID);

export default router;
