"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvStr = getEnvStr;
exports.getEnvArr = getEnvArr;
exports.getEnvNum = getEnvNum;
exports.getEnvJson = getEnvJson;
exports.getEnvBool = getEnvBool;
function getEnvStr(name, defaultValue = '') {
    const result = process.env[name];
    return result == null || result === '' ? defaultValue : result;
}
function getEnvArr(name, defaultValue = []) {
    const result = process.env[name];
    return result == null || result === '' ? defaultValue : result.split(';');
}
function getEnvNum(name, defaultValue = 0) {
    const result = process.env[name];
    return result == null || result === '' ? defaultValue : Number(result);
}
function getEnvJson(name, defaultValue) {
    const result = process.env[name];
    return result == null || result === '' ? defaultValue : JSON.parse(result);
}
function getEnvBool(name, defaultValue) {
    const result = process.env[name];
    if (result == null || result === '') {
        return defaultValue;
    }
    if (result.toLowerCase() === 'y' ||
        result.toLowerCase() === 'yes' ||
        result.toLowerCase() === 'true') {
        return true;
    }
    if (result.toLowerCase() === 'n' ||
        result.toLowerCase() === 'no' ||
        result.toLowerCase() === 'false') {
        return false;
    }
    throw Error(`Config env is not a boolean type: ${name}. Result is ${result}`);
}
//# sourceMappingURL=config.js.map