import { employeeRepository } from "../../libs/database/config.js";

const deleteEmployeeByID = async (req, res, next) => {
  res.send(req.body);
};

export { deleteEmployeeByID };
