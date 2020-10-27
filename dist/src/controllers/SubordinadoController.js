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
var nodemailer_1 = __importDefault(require("nodemailer"));
var PassRecover = /** @class */ (function () {
    function PassRecover() {
    }
    PassRecover.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, subordinados, orgao, teste, user, insertId, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = request.params.user_id;
                        subordinados = request.body.subordinados;
                        orgao = request.params.orgao;
                        teste = subordinados;
                        user = {
                            user_id: user_id,
                            subordinados: [teste]
                        };
                        return [4 /*yield*/, connection_1.default(orgao + "subordinados").insert(user)];
                    case 1:
                        insertId = _a.sent();
                        id = insertId[0];
                        return [2 /*return*/, response.json(__assign({ id: id }, user))];
                }
            });
        });
    };
    PassRecover.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, orgao, user, pass, transporter, chefe, email, selectUser, teste, sub, crypto, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = request.params.user_id;
                        orgao = request.params.orgao;
                        user = process.env.USER;
                        pass = process.env.PASS;
                        transporter = nodemailer_1.default.createTransport({
                            host: 'smtp.gmail.com',
                            port: 587,
                            auth: { user: user, pass: pass }
                        });
                        return [4 /*yield*/, connection_1.default(orgao + "users").where('id', user_id).first()];
                    case 1:
                        chefe = _a.sent();
                        email = chefe.email;
                        return [4 /*yield*/, connection_1.default(orgao + "subordinados").where('user_id', user_id).first()];
                    case 2:
                        selectUser = _a.sent();
                        console.log(selectUser);
                        if (!selectUser) {
                            return [2 /*return*/, response.status(404).json({ message: "Usuario sem subordinados" })];
                        }
                        teste = selectUser;
                        sub = connection_1.default(orgao + "users").whereIn('id', teste);
                        crypto = require("crypto");
                        code = crypto.randomBytes(3).toString('hex');
                        transporter.sendMail({
                            from: user,
                            to: email,
                            subject: "Recuperação de senha",
                            html: "<p style=\"font-size:18px;\">Seu codigo de verifica\u00E7\u00E3o \u00E9 <strong>" + code + "</strong></p>"
                        }).then(function (info) {
                            response.json({
                                selectUser: selectUser
                            });
                        }).catch(function (error) {
                            response.send(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return PassRecover;
}());
exports.default = PassRecover;
