import { Router } from "express";

import {
  getAllDepartments,
  createDepartment,
  editDepartment,
} from "../controllers/department.js";

const router = Router();

router.get("/", getAllDepartments);
router.get("/create", createDepartment);
router.get("/edit/:id", editDepartment);

export default router;
