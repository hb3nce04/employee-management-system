import { Router } from "express";
import { deleteEmployeeByID } from "../../controllers/api/employee.js";

const router = Router();

router.delete("/:id", deleteEmployeeByID);

export default router;
