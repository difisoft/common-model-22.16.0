"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = exports.logger = void 0;
const log4js_1 = require("log4js");
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return log4js_1.configure; } });
const logger = (0, log4js_1.getLogger)('application');
exports.logger = logger;
//# sourceMappingURL=logger.js.map