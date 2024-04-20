import { userRepository } from "../../libs/database/config";

const addUser = (req, res, next) => {};

const deleteUserByID = async (req, res, next) => {
  const { id } = req.params;

  await userRepository.delete(id).then(() => {
    req.flash(
      "success",
      "You have successfully deleted a user from the list!" + id
    );
    res.redirect("/users");
  });
};

export { addUser, deleteUserByID };
