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
    FormsController.prototype.indexInativos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orgao, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orgao = request.params.orgao;
                        return [4 /*yield*/, connection_1.default(orgao + "users").where('root', true).orderBy('nome')];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                }
            });
        });
    };
    FormsController.prototype.indexNotSend = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, orgao, test, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        orgao = request.params.orgao;
                        test = id;
                        return [4 /*yield*/, connection_1.default(orgao + "users").whereNotIn('id', test).whereNot('root', true).whereNot('email', 'inativo').orderBy('nome')];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                }
            });
        });
    };
    FormsController.prototype.indexInapto = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, olfato, paladar, corpo, select, selectDate, orgao, _b, filterData, filterInfectado, filterContato, filterTosse, filterFebre, filterFalta_ar, filterCalafrio, filterGarganta, filterCabeça, filterCorpo, filterOlfato, filterPaladar, filterTemperatura, filterAll;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.query, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, olfato = _a.olfato, paladar = _a.paladar, corpo = _a.corpo;
                        select = request.query.select;
                        selectDate = request.query.selectDate;
                        orgao = request.params.orgao;
                        _b = select;
                        switch (_b) {
                            case "data": return [3 /*break*/, 1];
                            case "infectado": return [3 /*break*/, 3];
                            case "contato_infectado": return [3 /*break*/, 5];
                            case "tosse": return [3 /*break*/, 7];
                            case "febre": return [3 /*break*/, 9];
                            case "falta_ar": return [3 /*break*/, 11];
                            case "calafrio": return [3 /*break*/, 13];
                            case "garganta": return [3 /*break*/, 15];
                            case "cabeça": return [3 /*break*/, 17];
                            case "corpo": return [3 /*break*/, 19];
                            case "olfato": return [3 /*break*/, 21];
                            case "paladar": return [3 /*break*/, 23];
                            case "temperatura": return [3 /*break*/, 25];
                        }
                        return [3 /*break*/, 27];
                    case 1: return [4 /*yield*/, connection_1.default(orgao + "forms").where('data', String(selectDate)).where('apto', false)];
                    case 2:
                        filterData = _c.sent();
                        response.json(filterData);
                        return [3 /*break*/, 29];
                    case 3: return [4 /*yield*/, connection_1.default(orgao + "forms").where('infectado', Boolean(infectado)).where('data', String(selectDate)).where('apto', false)];
                    case 4:
                        filterInfectado = _c.sent();
                        response.json(filterInfectado);
                        return [3 /*break*/, 29];
                    case 5: return [4 /*yield*/, connection_1.default(orgao + "forms").where('contato_infectado', Boolean(contato_infectado)).where('data', String(selectDate)).where('apto', false)];
                    case 6:
                        filterContato = _c.sent();
                        response.json(filterContato);
                        return [3 /*break*/, 29];
                    case 7: return [4 /*yield*/, connection_1.default(orgao + "forms").where('tosse', Boolean(tosse)).where('data', String(selectDate)).where('apto', false)];
                    case 8:
                        filterTosse = _c.sent();
                        response.json(filterTosse);
                        return [3 /*break*/, 29];
                    case 9: return [4 /*yield*/, connection_1.default(orgao + "forms").where('febre', Boolean(febre)).where('data', String(selectDate)).where('apto', false)];
                    case 10:
                        filterFebre = _c.sent();
                        response.json(filterFebre);
                        return [3 /*break*/, 29];
                    case 11: return [4 /*yield*/, connection_1.default(orgao + "forms").where('falta_ar', Boolean(falta_ar)).where('data', String(selectDate)).where('apto', false)];
                    case 12:
                        filterFalta_ar = _c.sent();
                        response.json(filterFalta_ar);
                        return [3 /*break*/, 29];
                    case 13: return [4 /*yield*/, connection_1.default(orgao + "forms").where('calafrio', Boolean(calafrio)).where('data', String(selectDate)).where('apto', false)];
                    case 14:
                        filterCalafrio = _c.sent();
                        response.json(filterCalafrio);
                        return [3 /*break*/, 29];
                    case 15: return [4 /*yield*/, connection_1.default(orgao + "forms").where('garganta', Boolean(garganta)).where('data', String(selectDate)).where('apto', false)];
                    case 16:
                        filterGarganta = _c.sent();
                        response.json(filterGarganta);
                        return [3 /*break*/, 29];
                    case 17: return [4 /*yield*/, connection_1.default(orgao + "forms").where('cabeça', Boolean(cabeça)).where('data', String(selectDate)).where('apto', false)];
                    case 18:
                        filterCabeça = _c.sent();
                        response.json(filterCabeça);
                        return [3 /*break*/, 29];
                    case 19: return [4 /*yield*/, connection_1.default(orgao + "forms").where('corpo', Boolean(corpo)).where('data', String(selectDate)).where('apto', false)];
                    case 20:
                        filterCorpo = _c.sent();
                        response.json(filterCorpo);
                        return [3 /*break*/, 29];
                    case 21: return [4 /*yield*/, connection_1.default(orgao + "forms").where('olfato', Boolean(olfato)).where('data', String(selectDate)).where('apto', false)];
                    case 22:
                        filterOlfato = _c.sent();
                        response.json(filterOlfato);
                        return [3 /*break*/, 29];
                    case 23: return [4 /*yield*/, connection_1.default(orgao + "forms").where('paladar', Boolean(paladar)).where('data', String(selectDate)).where('apto', false)];
                    case 24:
                        filterPaladar = _c.sent();
                        response.json(filterPaladar);
                        return [3 /*break*/, 29];
                    case 25: return [4 /*yield*/, connection_1.default(orgao + "forms").where('temperatura', '>=', 37.2).where('data', String(selectDate)).where('apto', false)];
                    case 26:
                        filterTemperatura = _c.sent();
                        response.json(filterTemperatura);
                        return [3 /*break*/, 29];
                    case 27: return [4 /*yield*/, connection_1.default(orgao + "forms").where('apto', false)];
                    case 28:
                        filterAll = _c.sent();
                        response.json(filterAll);
                        return [3 /*break*/, 29];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    FormsController.prototype.indexSelect = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, olfato, paladar, corpo, select, selectDate, orgao, _b, filterData, filterInfectado, filterContato, filterTosse, filterFebre, filterFalta_ar, filterCalafrio, filterGarganta, filterCabeça, filterCorpo, filterOlfato, filterTemperatura, filterPaladar, filterVisitante, filterSintomas, filterDataDefault;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.query, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, olfato = _a.olfato, paladar = _a.paladar, corpo = _a.corpo;
                        select = request.query.select;
                        selectDate = request.query.selectDate;
                        orgao = request.params.orgao;
                        _b = select;
                        switch (_b) {
                            case "data": return [3 /*break*/, 1];
                            case "infectado": return [3 /*break*/, 3];
                            case "contato_infectado": return [3 /*break*/, 5];
                            case "tosse": return [3 /*break*/, 7];
                            case "febre": return [3 /*break*/, 9];
                            case "falta_ar": return [3 /*break*/, 11];
                            case "calafrio": return [3 /*break*/, 13];
                            case "garganta": return [3 /*break*/, 15];
                            case "cabeça": return [3 /*break*/, 17];
                            case "corpo": return [3 /*break*/, 19];
                            case "olfato": return [3 /*break*/, 21];
                            case "temperatura": return [3 /*break*/, 23];
                            case "paladar": return [3 /*break*/, 25];
                            case "visitante": return [3 /*break*/, 27];
                            case "sintomas": return [3 /*break*/, 29];
                        }
                        return [3 /*break*/, 31];
                    case 1: return [4 /*yield*/, connection_1.default(orgao + "forms").where('data', String(selectDate)).whereNot('user_id', 135).orderBy('nome')];
                    case 2:
                        filterData = _c.sent();
                        response.json(filterData);
                        return [3 /*break*/, 33];
                    case 3: return [4 /*yield*/, connection_1.default(orgao + "forms").where('infectado', Boolean(infectado)).where('data', String(selectDate))];
                    case 4:
                        filterInfectado = _c.sent();
                        response.json(filterInfectado);
                        return [3 /*break*/, 33];
                    case 5: return [4 /*yield*/, connection_1.default(orgao + "forms").where('contato_infectado', Boolean(contato_infectado)).where('data', String(selectDate))];
                    case 6:
                        filterContato = _c.sent();
                        response.json(filterContato);
                        return [3 /*break*/, 33];
                    case 7: return [4 /*yield*/, connection_1.default(orgao + "forms").where('tosse', Boolean(tosse)).where('data', String(selectDate))];
                    case 8:
                        filterTosse = _c.sent();
                        response.json(filterTosse);
                        return [3 /*break*/, 33];
                    case 9: return [4 /*yield*/, connection_1.default(orgao + "forms").where('febre', Boolean(febre)).where('data', String(selectDate))];
                    case 10:
                        filterFebre = _c.sent();
                        response.json(filterFebre);
                        return [3 /*break*/, 33];
                    case 11: return [4 /*yield*/, connection_1.default(orgao + "forms").where('falta_ar', Boolean(falta_ar)).where('data', String(selectDate))];
                    case 12:
                        filterFalta_ar = _c.sent();
                        response.json(filterFalta_ar);
                        return [3 /*break*/, 33];
                    case 13: return [4 /*yield*/, connection_1.default(orgao + "forms").where('calafrio', Boolean(calafrio)).where('data', String(selectDate))];
                    case 14:
                        filterCalafrio = _c.sent();
                        response.json(filterCalafrio);
                        return [3 /*break*/, 33];
                    case 15: return [4 /*yield*/, connection_1.default(orgao + "forms").where('garganta', Boolean(garganta)).where('data', String(selectDate))];
                    case 16:
                        filterGarganta = _c.sent();
                        response.json(filterGarganta);
                        return [3 /*break*/, 33];
                    case 17: return [4 /*yield*/, connection_1.default(orgao + "forms").where('cabeça', Boolean(cabeça)).where('data', String(selectDate))];
                    case 18:
                        filterCabeça = _c.sent();
                        response.json(filterCabeça);
                        return [3 /*break*/, 33];
                    case 19: return [4 /*yield*/, connection_1.default(orgao + "forms").where('corpo', Boolean(corpo)).where('data', String(selectDate))];
                    case 20:
                        filterCorpo = _c.sent();
                        response.json(filterCorpo);
                        return [3 /*break*/, 33];
                    case 21: return [4 /*yield*/, connection_1.default(orgao + "forms").where('olfato', Boolean(olfato)).where('data', String(selectDate))];
                    case 22:
                        filterOlfato = _c.sent();
                        response.json(filterOlfato);
                        return [3 /*break*/, 33];
                    case 23: return [4 /*yield*/, connection_1.default(orgao + "forms").where('temperatura', Number(30.2)).where('data', String(selectDate))];
                    case 24:
                        filterTemperatura = _c.sent();
                        response.json(filterTemperatura);
                        return [3 /*break*/, 33];
                    case 25: return [4 /*yield*/, connection_1.default(orgao + "forms").where('paladar', Boolean(paladar)).where('data', String(selectDate))];
                    case 26:
                        filterPaladar = _c.sent();
                        response.json(filterPaladar);
                        return [3 /*break*/, 33];
                    case 27: return [4 /*yield*/, connection_1.default(orgao + "forms").where('user_id', 135).where('data', String(selectDate))];
                    case 28:
                        filterVisitante = _c.sent();
                        response.json(filterVisitante);
                        return [3 /*break*/, 33];
                    case 29: return [4 /*yield*/, connection_1.default(orgao + "forms")
                            .where('paladar', true)
                            .orWhere('olfato', true)
                            .orWhere('corpo', true)
                            .orWhere('cabeça', true)
                            .orWhere('garganta', true)
                            .orWhere('calafrio', true)
                            .orWhere('falta_ar', true)
                            .orWhere('febre', true)
                            .orWhere('tosse', true)
                            .orWhere('contato_infectado', true)
                            .where('data', String(selectDate))];
                    case 30:
                        filterSintomas = _c.sent();
                        response.json(filterSintomas);
                        return [3 /*break*/, 33];
                    case 31: return [4 /*yield*/, connection_1.default(orgao + "forms").where('data', String(selectDate))];
                    case 32:
                        filterDataDefault = _c.sent();
                        response.json(filterDataDefault);
                        return [3 /*break*/, 33];
                    case 33: return [2 /*return*/];
                }
            });
        });
    };
    FormsController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, orgao, form, user_id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        orgao = request.params.orgao;
                        return [4 /*yield*/, connection_1.default(orgao + "forms").where('id', id).first()];
                    case 1:
                        form = _a.sent();
                        if (!form) {
                            return [2 /*return*/, response.status(400).json({ message: "Formulario não encontrado" })];
                        }
                        user_id = form.user_id;
                        return [4 /*yield*/, connection_1.default(orgao + "users").where('id', user_id).first()];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, response.json(__assign(__assign({}, form), user))];
                }
            });
        });
    };
    FormsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var select_id, orgao, user, id, nome, numero, email, matricula, cpf, user_id, _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, corpo, olfato, paladar, temperatura, count, apto, form, insertId, form_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        select_id = request.params.id;
                        orgao = request.params.orgao;
                        return [4 /*yield*/, connection_1.default(orgao + "users").where('id', select_id).first()];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, response.status(400).json({ message: "Usuario não encontrado" })];
                        }
                        id = user.id, nome = user.nome, numero = user.numero, email = user.email, matricula = user.matricula, cpf = user.cpf;
                        user_id = id;
                        _a = request.body, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, corpo = _a.corpo, olfato = _a.olfato, paladar = _a.paladar, temperatura = _a.temperatura, count = _a.count, apto = _a.apto;
                        form = {
                            user_id: user_id,
                            data: data,
                            infectado: infectado,
                            contato_infectado: contato_infectado,
                            tosse: tosse,
                            febre: febre,
                            falta_ar: falta_ar,
                            calafrio: calafrio,
                            garganta: garganta,
                            cabeça: cabeça,
                            corpo: corpo,
                            olfato: olfato,
                            paladar: paladar,
                            temperatura: temperatura,
                            apto: apto,
                            nome: nome,
                            numero: numero,
                            email: email,
                            matricula: matricula,
                            count: count,
                            cpf: cpf
                        };
                        return [4 /*yield*/, connection_1.default(orgao + "forms").insert(form)];
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
