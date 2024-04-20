import { employeeRepository } from "../libs/database/config.js";

const mainIndexPage = async (req, res, next) => {
  const countOfEmployees = await employeeRepository.count();
  res.render("pages/home", { countOfEmployees: countOfEmployees });
};

export { mainIndexPage };
