import { employeeRepository } from "../../libs/database/config.js";

const deleteEmployeeByID = async (req, res, next) => {
  const { id } = req.params;

  await employeeRepository.delete(id).then(() => {
    req.flash(
      "success",
      "You have successfully deleted an employee from the list!" + id
    );
    res.redirect("/employees");
  });
};

export { deleteEmployeeByID };
