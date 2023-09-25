const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  authUser,
  updateUser,
} = require("../service/service");
const createToken = require("../helper/jwt");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    res.status(200).send(await getAllUsers());
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).send(await getUserById(id));
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    res.status(200).send(await createUser(name, surname, email, password));
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).send(await deleteUser(id));
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await authUser(email, password);
    const token = createToken(userData);
    res.cookie("access_token", token, {
      httpOnly: false,
      secure: true,
    });

    console.log(token);
    res.status(200).send(userData);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, password } = req.body;

    res.status(200).send(await updateUser(id, name, surname, email, password));
  } catch (er) {
    res.status(404).send(er.message);
  }
});

module.exports = route;
