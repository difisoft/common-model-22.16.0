"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicateObj = void 0;
/**
 * Removes duplicate objects from an array based on a specified field.
 *
 * @param arr - The array of objects to process
 * @param fieldName - The field name to check for duplicates
 * @returns A new array containing only unique objects based on the specified field
 *
 * @example
 * const arr = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 1, name: 'John'}];
 * removeDuplicateObj(arr, 'id'); // Returns [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
 */
const removeDuplicateObj = (arr, fieldName) => {
    if (arr === null || arr === undefined || fieldName === null || fieldName === undefined) {
        return [];
    }
    return (arr
        .map((value) => value[fieldName])
        // store the keys of the unique objects
        .map((currentValue, currentIndex, currentArr) => {
        if (currentArr.indexOf(currentValue) === currentIndex) {
            return currentIndex;
        }
        else {
            return -1;
        }
    })
        // map unique key -> object
        .filter((value) => value !== -1)
        .map((value) => arr[value]));
};
exports.removeDuplicateObj = removeDuplicateObj;
//# sourceMappingURL=array.js.map