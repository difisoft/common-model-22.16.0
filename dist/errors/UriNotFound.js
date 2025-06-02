"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralError_1 = __importDefault(require("./GeneralError"));
class UriNotFound extends GeneralError_1.default {
    constructor(source) {
        super('URI_NOT_FOUND', undefined, source);
    }
}
exports.default = UriNotFound;
//# sourceMappingURL=UriNotFound.js.map