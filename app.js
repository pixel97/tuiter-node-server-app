import express from 'express'
import cors from 'cors'
import HelloController from './controller/hello-controller.js'
import UserController from './controller/users/users-controller.js'
import TuitsController from "./controller/tuits/tuits-controller.js";

const app = express()
app.use(cors())
//const port = 4000
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(4000);
