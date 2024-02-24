import { Router } from "express";

import { checkAuth, checkNotAuth } from "../middlewares/checkAuth.js";
import checkAdmin from "../middlewares/checkAdmin.js";

import departmentRoute from "./department.js";
import employeeRoutes from "./employee.js";
import userRoutes from "./user.js";

const router = Router();

router.get("/", (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/home");
  } else {
    return res.redirect("/auth");
  }
});

router.get("/home", checkAuth, (req, res, next) => {
  res.render("pages/home");
});

router.get("/auth", checkNotAuth, (req, res, next) => {
  const { logout } = req.query;
  if (Boolean(logout)) {
    req.flash("success", "You have signed out successfully!");
    return res.redirect("/");
  }

  res.render("pages/auth", { layout: false });
});

router.use("/departments", checkAuth, checkAdmin, departmentRoute);
router.use("/employees", checkAuth, checkAdmin, employeeRoutes);
router.use("/users", checkAuth, checkAdmin, userRoutes);

router.get("*", function (req, res) {
  res.render("pages/404", { layout: false });
});

export default router;
