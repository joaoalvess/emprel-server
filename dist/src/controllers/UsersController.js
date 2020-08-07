"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data, forms, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        data = request.query.data;
                        return [4 /*yield*/, connection_1.default('forms').where('user_id', id)];
                    case 1:
                        forms = _a.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(forms)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('user_id', id).where('data', Number(data)).distinct()];
                    case 2:
                        userData = _a.sent();
                        return [2 /*return*/, response.json(userData)];
                }
            });
        });
    };
    UsersController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, email, cpf, matricula, userName, userEmail, userCpf, userMatricula;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.query, nome = _a.nome, email = _a.email, cpf = _a.cpf, matricula = _a.matricula;
                        return [4 /*yield*/, connection_1.default('users').where('nome', String(nome))];
                    case 1:
                        userName = _b.sent();
                        return [4 /*yield*/, connection_1.default('users').where('email', String(email)).first()];
                    case 2:
                        userEmail = _b.sent();
                        return [4 /*yield*/, connection_1.default('users').where('cpf', Number(cpf)).first()];
                    case 3:
                        userCpf = _b.sent();
                        return [4 /*yield*/, connection_1.default('users').where('matricula', Number(matricula)).first()];
                    case 4:
                        userMatricula = _b.sent();
                        return [2 /*return*/, response.json({
                                userName: userName,
                                userEmail: userEmail,
                                userCpf: userCpf,
                                userMatricula: userMatricula
                            })];
                }
            });
        });
    };
    UsersController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, email, senha, cpf, matricula, user, insertId, user_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nome = _a.nome, email = _a.email, senha = _a.senha, cpf = _a.cpf, matricula = _a.matricula;
                        user = {
                            nome: nome,
                            email: email,
                            senha: senha,
                            cpf: cpf,
                            matricula: matricula,
                            adm: false,
                            root: false
                        };
                        return [4 /*yield*/, connection_1.default('users').insert(user)];
                    case 1:
                        insertId = _b.sent();
                        user_id = insertId[0];
                        return [2 /*return*/, response.json(__assign({ id: user_id }, user))];
                }
            });
        });
    };
    UsersController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, connection_1.default('users').where('id', id).delete()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json({ messager: "usuario deletado" })];
                }
            });
        });
    };
    return UsersController;
}());
exports.default = UsersController;