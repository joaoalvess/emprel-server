"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var multerConfig = require('./config/multer');
var UsersController_1 = __importDefault(require("./controllers/UsersController"));
var FormsController_1 = __importDefault(require("./controllers/FormsController"));
var TodayController_1 = __importDefault(require("./controllers/TodayController"));
var UserAuthController_1 = __importDefault(require("./controllers/UserAuthController"));
var PerfilController_1 = __importDefault(require("./controllers/PerfilController"));
var UserNotToday_1 = __importDefault(require("./controllers/UserNotToday"));
var TempController_1 = __importDefault(require("./controllers/TempController"));
var PhotoController_1 = __importDefault(require("./controllers/PhotoController"));
var PassRecover_1 = __importDefault(require("./controllers/PassRecover"));
var VisitController_1 = __importDefault(require("./controllers/VisitController"));
var InativoController_1 = __importDefault(require("./controllers/InativoController"));
var SubordinadoController_1 = __importDefault(require("./controllers/SubordinadoController"));
var routes = express_1.default.Router();
var usersController = new UsersController_1.default();
var formsController = new FormsController_1.default();
var todayController = new TodayController_1.default();
var userAuthController = new UserAuthController_1.default();
var perfilController = new PerfilController_1.default();
var userNotToday = new UserNotToday_1.default();
var tempController = new TempController_1.default();
var photoController = new PhotoController_1.default();
var passRecover = new PassRecover_1.default();
var visitController = new VisitController_1.default();
var inativoController = new InativoController_1.default();
var subordinadoController = new SubordinadoController_1.default();
routes.post("/:orgao/cadastrovisitante", visitController.create);
routes.post("/:orgao/addsubordinados/:user_id", subordinadoController.create);
routes.get("/:orgao/emailsub/:user_id", subordinadoController.show);
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
routes.put("/:orgao/addinativo/:id", inativoController.create);
routes.put("/:orgao/deleteinativo/:id", inativoController.remove);
routes.get("/:orgao/inativolist", inativoController.index);
routes.put("/:orgao/formtemp/:id", tempController.update);
routes.put("/:orgao/photo/:id", multer_1.default(multerConfig).single('file'), photoController.update);
routes.get("/:orgao/userauth", userAuthController.show);
routes.get("/:orgao/usernottoday", userNotToday.show);
routes.get("/:orgao/formtoday/:id", todayController.show);
routes.post("/:orgao/createform/:id", formsController.create);
routes.get("/:orgao/form/:id", formsController.show);
routes.get("/:orgao/formselect", formsController.indexSelect);
routes.get("/:orgao/forminapto", formsController.indexInapto);
routes.post("/:orgao/formnotsend", formsController.indexNotSend);
routes.get("/:orgao/forminativos", formsController.indexInativos);
exports.default = routes;
