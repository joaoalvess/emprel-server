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
var FormsController = /** @class */ (function () {
    function FormsController() {
    }
    FormsController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, contato_infectado, tosse, febre, falta_ar, calafrio, temperatura, form, formData, formTemperatura, TempToday, formContato, ContatoToday, formTosse, tosseToday, formFebre, febreToday, formFaltaAr, faltaArToday, formCalafrio, calafrioToday;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.query, data = _a.data, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, temperatura = _a.temperatura;
                        return [4 /*yield*/, connection_1.default('forms')];
                    case 1:
                        form = _b.sent();
                        if (!data && !contato_infectado && !tosse && !febre && !falta_ar && !calafrio && !temperatura) {
                            return [2 /*return*/, response.json(form)];
                        }
                        if (!(!contato_infectado && !tosse && !febre && !falta_ar && !calafrio && !temperatura)) return [3 /*break*/, 3];
                        return [4 /*yield*/, connection_1.default('forms').where('data', Number(data))];
                    case 2:
                        formData = _b.sent();
                        return [2 /*return*/, response.json(formData)];
                    case 3:
                        if (!(!contato_infectado && !tosse && !febre && !falta_ar && !calafrio)) return [3 /*break*/, 6];
                        return [4 /*yield*/, connection_1.default('forms').where('temperatura', '>=', 37.8)];
                    case 4:
                        formTemperatura = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formTemperatura)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('temperatura', '>=', 37.8).where('data', Number(data))];
                    case 5:
                        TempToday = _b.sent();
                        return [2 /*return*/, response.json(TempToday)];
                    case 6:
                        if (!(!tosse && !febre && !falta_ar && !calafrio && !temperatura)) return [3 /*break*/, 9];
                        return [4 /*yield*/, connection_1.default('forms').where('contato_infectado', '=', true)];
                    case 7:
                        formContato = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formContato)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('contato_infectado', '=', true).where('data', Number(data))];
                    case 8:
                        ContatoToday = _b.sent();
                        return [2 /*return*/, response.json(ContatoToday)];
                    case 9:
                        if (!(!contato_infectado && !febre && !falta_ar && !calafrio && !temperatura)) return [3 /*break*/, 12];
                        return [4 /*yield*/, connection_1.default('forms').where('tosse', '=', true)];
                    case 10:
                        formTosse = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formTosse)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('tosse', '=', true).where('data', Number(data))];
                    case 11:
                        tosseToday = _b.sent();
                        return [2 /*return*/, response.json(tosseToday)];
                    case 12:
                        if (!(!contato_infectado && !tosse && !falta_ar && !calafrio && !temperatura)) return [3 /*break*/, 15];
                        return [4 /*yield*/, connection_1.default('forms').where('febre', '=', true)];
                    case 13:
                        formFebre = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formFebre)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('febre', '=', true).where('data', Number(data))];
                    case 14:
                        febreToday = _b.sent();
                        return [2 /*return*/, response.json(febreToday)];
                    case 15:
                        if (!(!contato_infectado && !tosse && !febre && !calafrio && !temperatura)) return [3 /*break*/, 18];
                        return [4 /*yield*/, connection_1.default('forms').where('falta_ar', '=', true)];
                    case 16:
                        formFaltaAr = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formFaltaAr)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('falta_ar', '=', true).where('data', Number(data))];
                    case 17:
                        faltaArToday = _b.sent();
                        return [2 /*return*/, response.json(faltaArToday)];
                    case 18:
                        if (!(!contato_infectado && !tosse && !febre && !falta_ar && !temperatura)) return [3 /*break*/, 21];
                        return [4 /*yield*/, connection_1.default('forms').where('calafrio', '=', true)];
                    case 19:
                        formCalafrio = _b.sent();
                        if (!data) {
                            return [2 /*return*/, response.json(formCalafrio)];
                        }
                        return [4 /*yield*/, connection_1.default('forms').where('calafrio', '=', true).where('data', Number(data))];
                    case 20:
                        calafrioToday = _b.sent();
                        return [2 /*return*/, response.json(calafrioToday)];
                    case 21: return [2 /*return*/, response.status(404).json({ message: "error" })];
                }
            });
        });
    };
    FormsController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, form, user_id, user, nome, email, cpf, matricula;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, connection_1.default('forms').where('id', id).first()];
                    case 1:
                        form = _a.sent();
                        if (!form) {
                            return [2 /*return*/, response.status(400).json({ message: "Formulario não encontrado" })];
                        }
                        user_id = form.user_id;
                        return [4 /*yield*/, connection_1.default('users').where('id', user_id).first()];
                    case 2:
                        user = _a.sent();
                        nome = user.nome, email = user.email, cpf = user.cpf, matricula = user.matricula;
                        return [2 /*return*/, response.json(__assign(__assign({}, form), { nome: nome,
                                email: email,
                                cpf: cpf,
                                matricula: matricula }))];
                }
            });
        });
    };
    FormsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var select_id, user, id, user_id, _a, data, contato_infectado, tosse, febre, falta_ar, calafrio, temperatura, form, insertId, form_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        select_id = request.params.id;
                        return [4 /*yield*/, connection_1.default('users').where('id', select_id).first()];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, response.status(400).json({ message: "Usuario não encontrado" })];
                        }
                        id = user.id;
                        user_id = id;
                        _a = request.body, data = _a.data, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, temperatura = _a.temperatura;
                        form = {
                            user_id: user_id,
                            data: data,
                            contato_infectado: contato_infectado,
                            tosse: tosse,
                            febre: febre,
                            falta_ar: falta_ar,
                            calafrio: calafrio,
                            temperatura: temperatura
                        };
                        return [4 /*yield*/, connection_1.default('forms').insert(form)];
                    case 2:
                        insertId = _b.sent();
                        form_id = insertId[0];
                        return [2 /*return*/, response.json(__assign({ form_id: form_id }, form))];
                }
            });
        });
    };
    return FormsController;
}());
exports.default = FormsController;
