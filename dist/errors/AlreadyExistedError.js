"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALREADY_EXISTED_ERROR = void 0;
const GeneralError_1 = __importDefault(require("./GeneralError"));
exports.ALREADY_EXISTED_ERROR = 'ALREADY_EXISTED_ERROR';
class AlreadyExistedError extends GeneralError_1.default {
    constructor(source) {
        super(exports.ALREADY_EXISTED_ERROR, undefined, source);
    }
}
exports.default = AlreadyExistedError;
//# sourceMappingURL=AlreadyExistedError.js.map