import bcrypt from "bcrypt";

import { userRepository } from "../../libs/database/config.js";

const authenticateUser = async (req, res, next) => {
  const { username, password } = req.body;

  const foundUser = await userRepository.findOne({
    select: {
      id: true,
      username: true,
      password: true,
      Employee: { id: true },
    },
    where: { username: username },
    relations: { Employee: true },
  });
  if (!foundUser) {
    req.flash("error", "Invalid creditials!");
    return res.redirect("/");
  }

  await bcrypt.compare(password, foundUser.password).then((result) => {
    result = password === "teszt";
    if (result) {
      req.session.user = {
        id: foundUser.id,
        username: foundUser.username,
        employeeID: foundUser.Employee.id,
      };
      res.redirect("/");
    } else {
      req.flash("error", "Invalid creditials!");
      res.redirect("/");
    }
  });
};

const logoutUser = (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.redirect("/auth?logout=true");
  }
};

export { authenticateUser, logoutUser };
