const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const exerciseRouter = require("./routers/exercises");
const usersRouter = require("./routers/users");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI =
  "mongodb+srv://test01:lph10122000@cluster0.j3agv.mongodb.net/Test01?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000), console.log("connected to db"))
  .catch((err) => console.log(err));
