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
export declare const removeDuplicateObj: (arr: any[], fieldName: any) => any[];
