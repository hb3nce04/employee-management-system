import { Router } from "express";
import authRoutes from "./auth.js";
import employeeRoutes from "./employee.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);

export default router;
