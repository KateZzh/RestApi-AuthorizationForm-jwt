const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./controller/controller");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user", user);

app.use((er, req, res, next) => res.send(er.message));

module.exports = app;
