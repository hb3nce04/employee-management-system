import { Router } from "express";
import { authenticateUser, logoutUser } from "../../controllers/api/auth.js";

const router = Router();

router.post("/", authenticateUser);
router.delete("/logout", logoutUser);

export default router;
