import { Router } from "express";

import { checkAuth, checkNotAuth } from "../middlewares/checkAuth.js";

import employeeRoutes from "./employee.js";

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

router.use(checkAuth);

router.use("/employees", employeeRoutes);

export default router;
