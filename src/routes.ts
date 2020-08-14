import express from 'express';
import multer from 'multer'
const multerConfig = require('./config/multer')

import UsersController from './controllers/UsersController'
import FormsController from './controllers/FormsController'
import TodayController from './controllers/TodayController'
import UserAuthController from './controllers/UserAuthController'
import PerfilController from './controllers/PerfilController'
import UserNotToday from './controllers/UserNotToday'
import TempController from './controllers/TempController'
import PhotoController from './controllers/PhotoController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()
const todayController = new TodayController()
const userAuthController = new UserAuthController()
const perfilController = new PerfilController()
const userNotToday = new UserNotToday()
const tempController = new TempController()
const photoController = new PhotoController()

routes.post("/createuser", usersController.create);
routes.delete("/deleteuser/:id", usersController.delete);
routes.get("/users", usersController.index);
routes.get("/user/:id", usersController.show);

routes.put("/updateusername/:id", usersController.updateNome);
routes.put("/updateusernumber/:id", usersController.updateNumber);
routes.put("/updateuseremail/:id", usersController.updateEmail);
routes.put("/updateusercpf/:id", usersController.updateCpf);
routes.put("/updateusermatricula/:id", usersController.updateMatricula);

routes.get("/perfil/:id", perfilController.show);
routes.put("/perfil/:id", perfilController.update);

routes.put("/formtemp/:id", tempController.update);

routes.put("/photo/:id", multer(multerConfig).single('file'), photoController.update);

routes.get("/userauth", userAuthController.show);

routes.get("/usernottoday", userNotToday.show);

routes.get("/formtoday/:id", todayController.show);

routes.post("/createform/:id", formsController.create);
routes.get("/form/:id", formsController.show);
routes.get("/formselect", formsController.indexSelect);
routes.get("/forminapto", formsController.indexInapto);

export default routes;
