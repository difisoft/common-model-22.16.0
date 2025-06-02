"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuccessResponse = createSuccessResponse;
exports.createFailResponse = createFailResponse;
function createSuccessResponse(data) {
    return {
        data: data,
    };
}
// noinspection JSAnnotator
function createFailResponse(code, messageParams, errors) {
    return {
        status: {
            code: code,
            messageParams: messageParams,
            params: errors,
        },
    };
}
//# sourceMappingURL=IResponse.js.map