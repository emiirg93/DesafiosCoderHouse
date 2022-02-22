"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const operacion = (num1, num2, NombreOperacion) => {
    return new Promise((res, rej) => __awaiter(void 0, void 0, void 0, function* () {
        switch (NombreOperacion) {
            case 'suma':
                const operacion1 = yield Promise.resolve().then(() => __importStar(require('./models/suma')));
                res(new operacion1.Suma(num1, num2).resultado());
                break;
            case 'resta':
                const operacion2 = yield Promise.resolve().then(() => __importStar(require('./models/resta')));
                res(new operacion2.Resta(num1, num2).resultado());
                break;
            case 'multiplicacion':
                const operacion3 = yield Promise.resolve().then(() => __importStar(require('./models/multiplicacion')));
                res(new operacion3.Multiplicacion(num1, num2).resultado());
                break;
            default:
                rej(`La operación "${NombreOperacion}" no encontrada.`);
                break;
        }
    }));
};
const operaciones = (num1, num2, NombreOperacion) => {
    operacion(num1, num2, NombreOperacion).then(resultado => {
        console.log(`El resultado de la ${NombreOperacion} es : ${resultado}`);
    }).catch(console.log);
};
operaciones(25, 25, 'multiplicacion');
