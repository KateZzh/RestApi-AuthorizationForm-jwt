const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const user = require("./controller/controller");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/user", user);

app.use((er, req, res, next) => res.send(er.message));

module.exports = app;
