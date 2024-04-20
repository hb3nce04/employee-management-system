import { departmentRepository } from "../libs/database/config.js";

const getAllDepartments = async (req, res, next) => {
  const departments = await departmentRepository.find();
  res.render("pages/departments", { departments: departments });
};

const createDepartment = async (req, res, next) => {
  res.render("pages/createDepartment");
};

const editDepartment = async (req, res, next) => {
  const { id } = req.params;
  const department = await departmentRepository.findOne({ where: { id: id } });
  res.render("pages/editDepartment", { department: department });
};

export { getAllDepartments, createDepartment, editDepartment };
