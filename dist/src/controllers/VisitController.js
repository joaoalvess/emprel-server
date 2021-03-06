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
var Visit = /** @class */ (function () {
    function Visit() {
    }
    Visit.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orgao, _a, data, infectado, contato_infectado, tosse, febre, falta_ar, calafrio, garganta, cabeça, corpo, olfato, paladar, temperatura, count, apto, nome, numero, email, cpf, form, insertId, form_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orgao = request.params.orgao;
                        _a = request.body, data = _a.data, infectado = _a.infectado, contato_infectado = _a.contato_infectado, tosse = _a.tosse, febre = _a.febre, falta_ar = _a.falta_ar, calafrio = _a.calafrio, garganta = _a.garganta, cabeça = _a.cabeça, corpo = _a.corpo, olfato = _a.olfato, paladar = _a.paladar, temperatura = _a.temperatura, count = _a.count, apto = _a.apto, nome = _a.nome, numero = _a.numero, email = _a.email, cpf = _a.cpf;
                        form = {
                            user_id: 135,
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
                            matricula: 135,
                            count: count,
                            cpf: cpf
                        };
                        return [4 /*yield*/, connection_1.default(orgao + "forms").insert(form)];
                    case 1:
                        insertId = _b.sent();
                        form_id = insertId[0];
                        return [2 /*return*/, response.json(__assign({ form_id: form_id }, form))];
                }
            });
        });
    };
    return Visit;
}());
exports.default = Visit;
