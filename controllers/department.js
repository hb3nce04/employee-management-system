import { departmentRepository } from "../libs/database/config.js";

const getAllDepartments = async (req, res, next) => {
  const departments = await departmentRepository.find();
  console.log(departments);
  res.render("pages/departments", { departments: departments });
};

export { getAllDepartments };
