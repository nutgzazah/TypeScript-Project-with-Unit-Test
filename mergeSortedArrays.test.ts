import { merge } from "./mergeSortedArrays";
test("merge sorted arrays", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 7, 5])).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
});