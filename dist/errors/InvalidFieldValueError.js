"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidParameterError_1 = __importDefault(require("./InvalidParameterError"));
class InvalidFieldValueError extends InvalidParameterError_1.default {
    constructor(fieldName, fieldValue) {
        super([{
                code: 'INVALID_FIELD_VALUE',
                param: fieldName,
                messageParams: [fieldName, fieldValue]
            }]);
    }
}
exports.default = InvalidFieldValueError;
//# sourceMappingURL=InvalidFieldValueError.js.map