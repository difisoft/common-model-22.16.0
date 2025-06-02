"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoForwardResponseError = exports.createFromStatus = exports.TimeoutError = exports.TokenExpiredError = exports.ForwardError = exports.InvalidFieldValueError = exports.InvalidIdSecretError = exports.InvalidParameterError = exports.AlreadyExistedError = exports.ObjectNotFoundError = exports.SystemError = exports.UriNotFound = exports.GeneralError = exports.FieldRequiredError = exports.TEMPLATE_LOAD_FAILED = exports.EMAIL_VALIDATION_FAILED = void 0;
const FieldRequiredError_1 = __importDefault(require("./FieldRequiredError"));
exports.FieldRequiredError = FieldRequiredError_1.default;
const GeneralError_1 = __importStar(require("./GeneralError"));
exports.GeneralError = GeneralError_1.default;
Object.defineProperty(exports, "createFromStatus", { enumerable: true, get: function () { return GeneralError_1.createFromStatus; } });
const UriNotFound_1 = __importDefault(require("./UriNotFound"));
exports.UriNotFound = UriNotFound_1.default;
const SystemError_1 = __importDefault(require("./SystemError"));
exports.SystemError = SystemError_1.default;
const ObjectNotFoundError_1 = __importDefault(require("./ObjectNotFoundError"));
exports.ObjectNotFoundError = ObjectNotFoundError_1.default;
const AlreadyExistedError_1 = __importDefault(require("./AlreadyExistedError"));
exports.AlreadyExistedError = AlreadyExistedError_1.default;
const InvalidParameterError_1 = __importDefault(require("./InvalidParameterError"));
exports.InvalidParameterError = InvalidParameterError_1.default;
const InvalidIdSecretError_1 = __importDefault(require("./InvalidIdSecretError"));
exports.InvalidIdSecretError = InvalidIdSecretError_1.default;
const InvalidFieldValueError_1 = __importDefault(require("./InvalidFieldValueError"));
exports.InvalidFieldValueError = InvalidFieldValueError_1.default;
const ForwardError_1 = require("./ForwardError");
Object.defineProperty(exports, "ForwardError", { enumerable: true, get: function () { return ForwardError_1.ForwardError; } });
const TokenExpiredError_1 = __importDefault(require("./TokenExpiredError"));
exports.TokenExpiredError = TokenExpiredError_1.default;
const TimeoutError_1 = require("./TimeoutError");
Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function () { return TimeoutError_1.TimeoutError; } });
const NoForwardResponseError_1 = __importDefault(require("./NoForwardResponseError"));
exports.NoForwardResponseError = NoForwardResponseError_1.default;
exports.EMAIL_VALIDATION_FAILED = 'EMAIL_VALIDATION_ERROR';
exports.TEMPLATE_LOAD_FAILED = 'TEMPLATE_LOAD_FAILED';
//# sourceMappingURL=index.js.map