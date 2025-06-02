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
export const removeDuplicateObj = (arr: any[], fieldName: any): any[] => {
  if (arr === null || arr === undefined || fieldName === null || fieldName === undefined) {
    return [];
  }
  return (
    arr
      .map((value: any) => value[fieldName])

      // store the keys of the unique objects
      .map((currentValue: any, currentIndex: number, currentArr: any[]) => {
        if (currentArr.indexOf(currentValue) === currentIndex) {
          return currentIndex;
        } else {
          return -1;
        }
      })
      // map unique key -> object
      .filter((value: any) => value !== -1)
      .map((value: any) => arr[value])
  );
};
