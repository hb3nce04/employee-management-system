import { employeeRepository } from "../libs/database/config.js";

const getAllEmployees = async (req, res, next) => {
  const employees = await employeeRepository.find({
    relations: { Department: true },
  });
  console.log(employees);
  res.render("pages/employees", { employees: employees });
};

export { getAllEmployees };
