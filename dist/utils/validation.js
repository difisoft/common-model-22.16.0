"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
exports.validate = validate;
exports.validateEmail = validateEmail;
exports.createFailValidation = createFailValidation;
exports.createFailFromError = createFailFromError;
exports.createSuccessValidation = createSuccessValidation;
exports.validatePassword = validatePassword;
const FieldRequiredError_1 = __importDefault(require("../errors/FieldRequiredError"));
const InvalidParameterError_1 = __importDefault(require("../errors/InvalidParameterError"));
const errors_1 = require("../errors");
const InvalidFieldValueError_1 = __importDefault(require("../errors/InvalidFieldValueError"));
function createFailValidation(code, messageParams, paramName) {
    return {
        success: false,
        params: [
            {
                code: code,
                messageParams: messageParams,
                param: paramName,
            },
        ],
    };
}
function createFailFromError(error) {
    return {
        success: false,
        params: error.params,
    };
}
function createSuccessValidation(data) {
    return {
        success: true,
        data: data,
    };
}
const INVALID_VALUE = 'INVALID_VALUE';
const NOT_GREATER_THAN_ERROR = 'NOT_GREATER_THAN_ERROR';
class Validate {
    constructor(fieldValue, fieldName) {
        this.fieldValue = fieldValue;
        this.fieldName = fieldName;
        this.isRequired = false;
        this.isFetchCount = false;
        this.checks = [];
    }
    setRequire() {
        this.isRequired = true;
        return this;
    }
    setIsFetchCount() {
        this.isFetchCount = true;
        return this;
    }
    add(func) {
        this.checks.push(func);
        return this;
    }
    addCheck(func, code, messageParams, paramName) {
        this.checks.push((value, name) => {
            if (func(value, name)) {
                return createSuccessValidation(value);
            }
            return createFailValidation(code ? code : INVALID_VALUE, messageParams, paramName ? paramName : this.fieldName);
        });
        return this;
    }
    adds(funcs) {
        this.checks = this.checks.concat(funcs);
        return this;
    }
    throwValid(invalidParameterError) {
        const result = this.valid();
        if (result && !result.success) {
            if (invalidParameterError) {
                invalidParameterError.adds(result.params);
            }
            else {
                throw new InvalidParameterError_1.default().adds(result.params);
            }
        }
    }
    valid() {
        let result = createSuccessValidation(this.fieldValue);
        if (this.isRequired) {
            if (isEmpty(this.fieldValue)) {
                return createFailFromError(new FieldRequiredError_1.default(this.fieldName));
            }
        }
        if (this.isFetchCount) {
            if (!isEmpty(this.fieldValue) && (isNaN(this.fieldValue) || this.fieldValue < 0)) {
                return createFailFromError(new InvalidFieldValueError_1.default(this.fieldName, this.fieldValue));
            }
        }
        if (this.checks.length > 0) {
            if (this.isRequired || !isEmpty(this.fieldValue)) {
                for (let i = 0; i < this.checks.length; i++) {
                    result = this.checks[i](this.fieldValue, this.fieldName);
                    if (result && !result.success) {
                        return result;
                    }
                }
            }
        }
        return result;
    }
    checkGt(minPrice) {
        this.checks.push((fieldValue, fieldName) => {
            if (fieldValue < minPrice) {
                return createFailValidation(NOT_GREATER_THAN_ERROR, [`${fieldValue}`, `${minPrice}`], fieldName);
            }
            else {
                return createSuccessValidation(this.fieldValue);
            }
        });
        return this;
    }
}
exports.Validate = Validate;
function validate(fieldValue, fieldName) {
    return new Validate(fieldValue, fieldName);
}
function isEmpty(fieldValue) {
    return fieldValue === undefined || fieldValue === null || fieldValue === '';
}
function validateEmail(fieldValue, paramName = 'email') {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(fieldValue.toLowerCase())) {
        return createSuccessValidation(fieldValue);
    }
    else {
        return createFailValidation(errors_1.EMAIL_VALIDATION_FAILED, undefined, paramName);
    }
}
function validatePassword(fieldValue, paramName = 'password', regex = '') {
    return createSuccessValidation(fieldValue);
}
//# sourceMappingURL=validation.js.map