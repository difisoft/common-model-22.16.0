"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
exports.convertToken = convertToken;
exports.undefinedOr = undefinedOr;
const generateToken = (length = 6, onlyDigit = true) => {
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (onlyDigit) {
        possible = '0123456789';
    }
    let text = '';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
exports.generateToken = generateToken;
function undefinedOr(data) {
    if (data == null) {
        return undefined;
    }
    return data;
}
function convertToken(token) {
    if (token == null) {
        return null;
    }
    return {
        userData: undefinedOr(token.ud),
        appVersion: undefinedOr(token.appV),
        clientId: undefinedOr(token.cId),
        domain: undefinedOr(token.dm),
        loginMethod: undefinedOr(token.lm),
        osVersion: undefinedOr(token.osV),
        platform: undefinedOr(token.pl),
        grantType: undefinedOr(token.gt),
        refreshTokenId: undefinedOr(token.rId),
        scopeGroupIds: undefinedOr(token.sgIds),
        serviceCode: undefinedOr(token.sc),
        serviceUserId: undefinedOr(token.suId),
        serviceUsername: undefinedOr(token.su),
        userId: undefinedOr(token.uId),
    };
}
//# sourceMappingURL=token.js.map