import { employeeRepository } from "../libs/database/config.js";

const getAllEmployees = async (req, res, next) => {
  const { page } = req.query;
  const employees = await employeeRepository.find({
    relations: { Department: true },
    take: 10,
    skip: 10 * (1 - 1),
  });
  res.render("pages/employees", { employees: employees });
};

const editEmployeeByID = async (req, res, next) => {
  const { id } = req.params;

  const foundEmployee = await employeeRepository.findOne({
    relations: { Department: true },
    where: { id: id },
  });
  res.render("pages/editEmployee", { employee: foundEmployee });
};

const createEmployee = async (req, res, next) => {
  res.render("pages/createEmployee");
};

export { getAllEmployees, createEmployee, editEmployeeByID };
