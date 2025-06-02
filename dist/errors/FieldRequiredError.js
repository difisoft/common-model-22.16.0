"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidParameterError_1 = __importDefault(require("./InvalidParameterError"));
class FieldRequiredError extends InvalidParameterError_1.default {
    constructor(fieldName) {
        super([{
                code: 'FIELD_IS_REQUIRED',
                param: fieldName,
                messageParams: [fieldName],
            }]);
    }
}
exports.default = FieldRequiredError;
//# sourceMappingURL=FieldRequiredError.js.map