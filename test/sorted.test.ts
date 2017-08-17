import {sequenceOf} from "../src/Sequence";

describe("sorted", () => {
    it("should sort numbers ascending", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(4);
        expect(array[4]).toBe(5);
    });

    it("should sort strings ascending", () => {
        const array = sequenceOf('1', '4', '3', '5', '2')
            .sorted()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe('1');
        expect(array[1]).toBe('2');
        expect(array[2]).toBe('3');
        expect(array[3]).toBe('4');
        expect(array[4]).toBe('5');
    });
});