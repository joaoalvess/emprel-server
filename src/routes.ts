import express from 'express';

import UsersController from './controllers/UsersController'
import FormsController from './controllers/FormsController'
import TodayController from './controllers/TodayController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()
const todayController = new TodayController()

routes.post("/createuser", usersController.create);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);

routes.get("/formtoday/:id", todayController.show);

routes.post("/createform/:id", formsController.create);
routes.get("/form/:id", formsController.show);
routes.get("/form", formsController.index);

export default routes;
