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
            var _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, olfato, paladar, corpo, select, _b, filterData, users, user, filterInfectado, filterContato, filterTosse, filterFebre, filterFalta_ar, filterCalafrio, filterGarganta, filterCabeça, filterCorpo, filterOlfato, filterPaladar, filterTemperatura, filterAll;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.query, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, olfato = _a.olfato, paladar = _a.paladar, corpo = _a.corpo;
                        select = request.query.select;
                        _b = select;
                        switch (_b) {
                            case "data": return [3 /*break*/, 1];
                            case "infectado": return [3 /*break*/, 4];
                            case "contato_infectado": return [3 /*break*/, 6];
                            case "tosse": return [3 /*break*/, 8];
                            case "febre": return [3 /*break*/, 10];
                            case "falta_ar": return [3 /*break*/, 12];
                            case "calafrio": return [3 /*break*/, 14];
                            case "garganta": return [3 /*break*/, 16];
                            case "cabeça": return [3 /*break*/, 18];
                            case "corpo": return [3 /*break*/, 20];
                            case "olfato": return [3 /*break*/, 22];
                            case "paladar": return [3 /*break*/, 24];
                            case "temperatura": return [3 /*break*/, 26];
                        }
                        return [3 /*break*/, 28];
                    case 1: return [4 /*yield*/, connection_1.default('forms').where('data', String(data))];
                    case 2:
                        filterData = _c.sent();
                        users = filterData[0];
                        return [4 /*yield*/, connection_1.default('users').where('id', [users.user_id])];
                    case 3:
                        user = _c.sent();
                        response.json(__assign({}, filterData));
                        return [3 /*break*/, 30];
                    case 4: return [4 /*yield*/, connection_1.default('forms').where('infectado', Boolean(infectado))];
                    case 5:
                        filterInfectado = _c.sent();
                        response.json(filterInfectado);
                        return [3 /*break*/, 30];
                    case 6: return [4 /*yield*/, connection_1.default('forms').where('contato_infectado', Boolean(contato_infectado))];
                    case 7:
                        filterContato = _c.sent();
                        response.json(filterContato);
                        return [3 /*break*/, 30];
                    case 8: return [4 /*yield*/, connection_1.default('forms').where('tosse', Boolean(tosse))];
                    case 9:
                        filterTosse = _c.sent();
                        response.json(filterTosse);
                        return [3 /*break*/, 30];
                    case 10: return [4 /*yield*/, connection_1.default('forms').where('febre', Boolean(febre))];
                    case 11:
                        filterFebre = _c.sent();
                        response.json(filterFebre);
                        return [3 /*break*/, 30];
                    case 12: return [4 /*yield*/, connection_1.default('forms').where('falta_ar', Boolean(falta_ar))];
                    case 13:
                        filterFalta_ar = _c.sent();
                        response.json(filterFalta_ar);
                        return [3 /*break*/, 30];
                    case 14: return [4 /*yield*/, connection_1.default('forms').where('calafrio', Boolean(calafrio))];
                    case 15:
                        filterCalafrio = _c.sent();
                        response.json(filterCalafrio);
                        return [3 /*break*/, 30];
                    case 16: return [4 /*yield*/, connection_1.default('forms').where('garganta', Boolean(garganta))];
                    case 17:
                        filterGarganta = _c.sent();
                        response.json(filterGarganta);
                        return [3 /*break*/, 30];
                    case 18: return [4 /*yield*/, connection_1.default('forms').where('cabeça', Boolean(cabeça))];
                    case 19:
                        filterCabeça = _c.sent();
                        response.json(filterCabeça);
                        return [3 /*break*/, 30];
                    case 20: return [4 /*yield*/, connection_1.default('forms').where('corpo', Boolean(corpo))];
                    case 21:
                        filterCorpo = _c.sent();
                        response.json(filterCorpo);
                        return [3 /*break*/, 30];
                    case 22: return [4 /*yield*/, connection_1.default('forms').where('corpo', Boolean(olfato))];
                    case 23:
                        filterOlfato = _c.sent();
                        response.json(filterOlfato);
                        return [3 /*break*/, 30];
                    case 24: return [4 /*yield*/, connection_1.default('forms').where('corpo', Boolean(paladar))];
                    case 25:
                        filterPaladar = _c.sent();
                        response.json(filterPaladar);
                        return [3 /*break*/, 30];
                    case 26: return [4 /*yield*/, connection_1.default('forms').where('temperatura', '>=', 37.2)];
                    case 27:
                        filterTemperatura = _c.sent();
                        response.json(filterTemperatura);
                        return [3 /*break*/, 30];
                    case 28: return [4 /*yield*/, connection_1.default('forms')];
                    case 29:
                        filterAll = _c.sent();
                        response.json(filterAll);
                        return [3 /*break*/, 30];
                    case 30: return [2 /*return*/];
                }
            });
        });
    };
    FormsController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, form, user_id, user;
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
                        return [2 /*return*/, response.json(__assign(__assign({}, form), user))];
                }
            });
        });
    };
    FormsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var select_id, user, id, user_id, _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, corpo, olfato, paladar, temperatura, apto, form, insertId, form_id, estaApto;
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
                        _a = request.body, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, corpo = _a.corpo, olfato = _a.olfato, paladar = _a.paladar, temperatura = _a.temperatura, apto = _a.apto;
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
                            apto: apto
                        };
                        return [4 /*yield*/, connection_1.default('forms').insert(form)];
                    case 2:
                        insertId = _b.sent();
                        form_id = insertId[0];
                        estaApto = insertId[apto];
                        return [2 /*return*/, response.json(__assign(__assign({ form_id: form_id }, form), { estaApto: estaApto }))];
                }
            });
        });
    };
    return FormsController;
}());
exports.default = FormsController;
