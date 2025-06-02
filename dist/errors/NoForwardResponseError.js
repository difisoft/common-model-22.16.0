"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralError_1 = __importDefault(require("./GeneralError"));
class NoForwardResponseError extends GeneralError_1.default {
    constructor(source) {
        super('NO_FORWARD_RESPONSE_ERROR', undefined, source);
    }
}
exports.default = NoForwardResponseError;
//# sourceMappingURL=NoForwardResponseError.js.map