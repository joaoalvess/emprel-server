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
import PassRecover from './controllers/PassRecover'
import VisitController from './controllers/VisitController'

const routes = express.Router();
const usersController = new UsersController()
const formsController = new FormsController()
const todayController = new TodayController()
const userAuthController = new UserAuthController()
const perfilController = new PerfilController()
const userNotToday = new UserNotToday()
const tempController = new TempController()
const photoController = new PhotoController()
const passRecover = new PassRecover()
const visitController = new VisitController()

routes.post("/:orgao/cadastrovisitante", visitController.create);

routes.post("/:orgao/createuser", usersController.create);
routes.delete("/:orgao/deleteuser/:id", usersController.delete);
routes.get("/:orgao/users", usersController.index);
routes.get("/:orgao/user/:id", usersController.show);

routes.put("/:orgao/updateusername/:id", usersController.updateNome);
routes.put("/:orgao/updateusernumber/:id", usersController.updateNumber);
routes.put("/:orgao/updateuseremail/:id", usersController.updateEmail);
routes.put("/:orgao/updateusercpf/:id", usersController.updateCpf);
routes.put("/:orgao/updateusermatricula/:id", usersController.updateMatricula);

routes.get("/:orgao/perfilname/:nome", perfilController.filterShow);
routes.get("/:orgao/perfil/:id", perfilController.show);
routes.put("/:orgao/perfil/:id", perfilController.update);

routes.post("/:orgao/send", passRecover.show);

routes.put("/:orgao/formtemp/:id", tempController.update);

routes.put("/:orgao/photo/:id", multer(multerConfig).single('file'), photoController.update);

routes.get("/:orgao/userauth", userAuthController.show);

routes.get("/:orgao/usernottoday", userNotToday.show);

routes.get("/:orgao/formtoday/:id", todayController.show);

routes.post("/:orgao/createform/:id", formsController.create);
routes.get("/:orgao/form/:id", formsController.show);
routes.get("/:orgao/formselect", formsController.indexSelect);
routes.get("/:orgao/forminapto", formsController.indexInapto);
routes.post("/:orgao/formnotsend", formsController.indexNotSend);

export default routes;
