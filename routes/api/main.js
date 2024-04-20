import { Router } from "express";
import authRoutes from "./auth.js";
import employeeRoutes from "./employee.js";
import departmentRoutes from "./department.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);
router.use("/departments", departmentRoutes);

export default router;
