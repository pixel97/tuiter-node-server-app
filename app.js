import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import HelloController from "./controller/hello-controller.js";
import UserController from "./controller/users/users-controller.js";
import TuitsController from "./controller/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter";
mongoose.connect(CONNECTION_STRING);

//mongoose.connect("mongodb://127.0.0.1:27017/tuiter");

console.log(mongoose.connection.readyState);

TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
