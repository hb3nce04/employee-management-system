import { userRepository } from "../libs/database/config.js";

const getAllUsers = async (req, res, next) => {
  const users = await userRepository.find();
  res.render("pages/users", { users: users });
};

const createUsers = async (req, res, next) => {
  res.render("pages/createUser");
};

export { getAllUsers, createUsers };
