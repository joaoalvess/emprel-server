"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex("emprelinativos").insert([
                        { user_id: 41, nome: "Moises Batista Leal Junior", email: "inativo", matricula: 3808, numero: 999779066 },
                        { user_id: 26, nome: "Bruno Luis C da Cunha Cruz", email: "inativo", matricula: 12998, numero: 999217400 },
                        { user_id: 9, nome: "Ana Dulce Coelho Couto", email: "inativo", matricula: 0, numero: 988320111 },
                        { user_id: 16, nome: "Cleide Silvana da Silva", email: "inativo", matricula: 4421, numero: 994886319 },
                        { user_id: 67, nome: "Fabiola Ferrer de Araujo Madei", email: "inativo", matricula: 6203, numero: 999781596 },
                        { user_id: 45, nome: "Gustavo Harrison de A Carlos", email: "inativo", matricula: 12033, numero: 985139739 },
                        { user_id: 69, nome: "Liliane Maria Batista de Moura", email: "inativo", matricula: 4340, numero: 998128385 },
                        { user_id: 51, nome: "Rildo Wanderley da Silva Filho", email: "inativo", matricula: 12653, numero: 986817552 },
                        { user_id: 34, nome: "Rogerio Vieira de Melo", email: "inativo", matricula: 5878, numero: 996159379 },
                        { user_id: 14, nome: "Rosemary L de Brito Carvalho", email: "inativo", matricula: 1910, numero: 998013250 },
                        { user_id: 62, nome: "Silvana Camara Alheiros", email: "inativo", matricula: 2666, numero: 996940038 },
                        { user_id: 66, nome: "Simone Gomes Lacet", email: "inativo", matricula: 5908, numero: 988779499 },
                        { user_id: 18, nome: "Michele Cristine de Araujo", email: "inativo", matricula: 12912, numero: 987656055 },
                        { user_id: 104, nome: "inativo", email: "inativo", matricula: 0, numero: 986034287 },
                        { user_id: 102, nome: "Anderson Fabio de S L Silva", email: "inativo", matricula: 0, numero: 996719185 },
                        { user_id: 112, nome: "Daniele Patricia Santos", email: "inativo", matricula: 12700, numero: 996840707 },
                        { user_id: 90, nome: "Dinaldo Lessa Inacio da Silva", email: "inativo", matricula: 0, numero: 992997791 },
                        { user_id: 107, nome: "Everton Lino Coutinho", email: "inativo", matricula: 12092, numero: 988773226 },
                        { user_id: 103, nome: "Heraldo Botelho de Araujo Juni", email: "inativo", matricula: 0, numero: 996236114 },
                        { user_id: 105, nome: "Hercules de Carvalho Sobral", email: "inativo", matricula: 0, numero: 987603549 },
                        { user_id: 82, nome: "Herton Viana Correia", email: "inativo", matricula: 6165, numero: 987591067 },
                        { user_id: 98, nome: "Ismael Vitor Borges", email: "inativo", matricula: 7412, numero: 999297666 },
                        { user_id: 118, nome: "Joao Batista Brito da Silva", email: "inativo", matricula: 5843, numero: 987682176 },
                        { user_id: 89, nome: "Joao Fernandes de L Junior", email: "inativo", matricula: 0, numero: 992997768 },
                        { user_id: 101, nome: "Jose Aldenes Silva Franca", email: "inativo", matricula: 0, numero: 996331402 },
                        { user_id: 125, nome: "Marcos Antonio Pacheco de Lima", email: "inativo", matricula: 7285, numero: 988046077 },
                        { user_id: 96, nome: "Monica Maria de A Severiano", email: "inativo", matricula: 7277, numero: 986962631 },
                        { user_id: 134, nome: "Renata Paula Verissimo Pereira", email: "inativo", matricula: 7250, numero: 979145475 },
                        { user_id: 114, nome: "Thiago Carvalho da Silva", email: "inativo", matricula: 12807, numero: 993090963 },
                        { user_id: 94, nome: "Thiago Ramalho Pacheco", email: "inativo", matricula: 12815, numero: 993811377 }
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.seed = seed;
;
