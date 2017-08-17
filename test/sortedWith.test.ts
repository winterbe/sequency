import {sequenceOf} from "../src/Sequence";

describe("sortedWith", () => {
    it("should sort numbers by given comparator", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sortedWith((a, b) => {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                return 0;
            })
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe(5);
        expect(array[1]).toBe(4);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(2);
        expect(array[4]).toBe(1);
    });
});