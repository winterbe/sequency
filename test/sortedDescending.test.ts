import {sequenceOf} from "../src/Sequence";

describe("sorted", () => {
    it("should sort numbers descending", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sortedDescending()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe(5);
        expect(array[1]).toBe(4);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(2);
        expect(array[4]).toBe(1);
    });

    it("should sort strings descending", () => {
        const array = sequenceOf('1', '4', '3', '5', '2')
            .sortedDescending()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe('5');
        expect(array[1]).toBe('4');
        expect(array[2]).toBe('3');
        expect(array[3]).toBe('2');
        expect(array[4]).toBe('1');
    });
});