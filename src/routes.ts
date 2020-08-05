import express from 'express';
import multer from 'multer'
const multerConfig = require('./config/multer')

import UsersController from './controllers/UsersController'
import FormsController from './controllers/FormsController'
import TodayController from './controllers/TodayController'
import UserAuthController from './controllers/UserAuthController'
import PerfilController from './controllers/PerfilController'
import TempController from './controllers/TempController'
import PhotoController from './controllers/PhotoController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()
const todayController = new TodayController()
const userAuthController = new UserAuthController()
const perfilController = new PerfilController()
const tempController = new TempController()
const photoController = new PhotoController()

routes.post("/createuser", usersController.create);
routes.delete("/deleteuser/:id", usersController.delete);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);

routes.get("/perfil/:id", perfilController.show);
routes.put("/perfil/:id", perfilController.update);

routes.put("/formtemp/:id", tempController.update);

routes.put("/photo/:id", multer(multerConfig).single('file'), photoController.update);

routes.get("/userauth", userAuthController.show);

routes.get("/formtoday/:id", todayController.show);

routes.post("/createform/:id", formsController.create);
routes.get("/form/:id", formsController.show);
routes.get("/form", formsController.index);

export default routes;
