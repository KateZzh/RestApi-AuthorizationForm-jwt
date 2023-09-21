const express = require("express");
const { getAllUsers, getUserById, createUser, deleteUser } = require("../service/service");

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

module.exports = route;
