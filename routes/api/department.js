import { Router } from "express";
import {
  createDepartment,
  deleteDepartmentByID,
  editDepartmentByID,
} from "../../controllers/api/department.js";

const router = Router();

router.post("/", createDepartment);
router.delete("/:id", deleteDepartmentByID);
router.patch("/:id", editDepartmentByID);

export default router;
