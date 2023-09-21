const {
  getAllUsersDB,
  getUserByIdDB,
  createUserDB,
  getByEmailDB,
  deleteUserDB,
} = require("../repository/repository");
const bcrypt = require("bcrypt");

const salt = 10;

async function getAllUsers() {
  return await getAllUsersDB();
}

async function getUserById(id) {
  return await getUserByIdDB(id);
}

async function createUser(name, surname, email, password) {
  const user = await getByEmailDB(email);

  if (user.length) throw new Error("user exists");
  const hashedPassword = await bcrypt.hash(password, salt);

  const data = await createUserDB(name, surname, email, hashedPassword);
  return data;
}

async function deleteUser(id) {
  return await deleteUserDB(id);
}

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
