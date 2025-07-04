"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralError_1 = __importDefault(require("./GeneralError"));
class InvalidIdSecretError extends GeneralError_1.default {
    constructor(source) {
        super('INVALID_ID_SECRET', undefined, source);
    }
}
exports.default = InvalidIdSecretError;
//# sourceMappingURL=InvalidIdSecretError.js.map