import { departmentRepository } from "../../libs/database/config.js";

const createDepartment = async (req, res, next) => {
  const { name } = req.body;

  if (name.length === 0) {
    req.flash("error", `The name is empty!`);
    return res.redirect("/departments/create");
  }

  const exists = await departmentRepository.exists({
    where: {
      name: name,
    },
  });

  if (exists) {
    req.flash("error", `The department ${name} has been already created!`);
    return res.redirect("/departments/create");
  }

  await departmentRepository.insert({
    name: name,
  });
  req.flash("success", `Department: ${name} successfully created!`);
  res.redirect("/departments");
};

const deleteDepartmentByID = async (req, res, next) => {
  const { id } = req.params;

  await departmentRepository.delete(id).then(() => {
    req.flash(
      "success",
      "You have successfully deleted a department from the list!" + id
    );
    res.redirect("/departments");
  });
};

const editDepartmentByID = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  await departmentRepository.update({ id: id }, { name: name }).then(() => {
    req.flash("success", "You have successfully edited the department!");
    res.redirect("/departments");
  });
};

export { createDepartment, deleteDepartmentByID, editDepartmentByID };
