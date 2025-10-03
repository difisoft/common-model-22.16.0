"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForwardUri = getForwardUri;
function getForwardUriWithSetting(msg, forwardConfig) {
    const result = {};
    const forwardData = forwardConfig;
    result.topic = forwardData.service;
    result.uri = forwardData.uri;
    return result;
}
function getForwardUri(msg, matchedScope) {
    return getForwardUriWithSetting(msg, matchedScope.forwardData);
}
//# sourceMappingURL=scope.js.map