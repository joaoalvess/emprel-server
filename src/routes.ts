import express from 'express';

import UsersController from './controllers/UsersController'
import FormsController from './controllers/FormsController'
import TodayController from './controllers/TodayController'
import UserAuthController from './controllers/UserAuthController'
import PerfilConroller from './controllers/PerfilController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()
const todayController = new TodayController()
const userAuthController = new UserAuthController()
const perfilConroller = new PerfilConroller()

routes.post("/createuser", usersController.create);
routes.delete("/deleteuser/:id", usersController.delete);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);

routes.get("/perfil/:id", perfilConroller.show);

routes.get("/userauth", userAuthController.show);

routes.get("/formtoday/:id", todayController.show);

routes.post("/createform/:id", formsController.create);
routes.get("/form/:id", formsController.show);
routes.get("/form", formsController.index);

export default routes;
