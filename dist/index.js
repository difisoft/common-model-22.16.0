"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
/**
 * Main entry point for the library
 */
const logger_1 = require("@/log/logger");
class Example {
    constructor(options) {
        var _a;
        this.name = options.name;
        this.value = (_a = options.value) !== null && _a !== void 0 ? _a : 0;
        logger_1.logger.info('Example instance created', { name: this.name, value: this.value });
    }
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
        logger_1.logger.info('Value updated', { name: this.name, oldValue: this.value, newValue: value });
    }
}
exports.Example = Example;
exports.default = Example;
//# sourceMappingURL=index.js.map