import { Router } from "express";

import {
  getAllEmployees,
  createEmployee,
  editEmployeeByID,
} from "../controllers/employee.js";

const router = Router();

router.get("/", getAllEmployees);
router.get("/create", createEmployee);
router.get("/edit/:id", editEmployeeByID);

export default router;
