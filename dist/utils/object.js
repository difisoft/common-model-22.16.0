"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = void 0;
exports.setObjKey = setObjKey;
const isNullOrUndefined = (input) => {
    return input === undefined || input === null ? true : false;
};
exports.isNullOrUndefined = isNullOrUndefined;
function setObjKey(obj, key, value) {
    const object = obj;
    if (object == null) {
        return {
            [key]: value,
        };
    }
    else {
        object[key] = value;
    }
    return object;
}
//# sourceMappingURL=object.js.map