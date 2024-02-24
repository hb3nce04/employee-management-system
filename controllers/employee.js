import { employeeRepository } from "../libs/database/config.js";

const getAllEmployees = async (req, res, next) => {
  const employees = await employeeRepository.find({
    relations: { Department: true },
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

export { getAllEmployees, editEmployeeByID };
