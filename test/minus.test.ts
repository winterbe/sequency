import {emptySequence, sequenceOf} from "../src/Sequence";

describe("minus", () => {
    it("should remove element", () => {
        const array = sequenceOf(1, 2, 3)
            .minus(1)
            .toArray();
        expect(array.length).toBe(2);
        expect(array[0]).toBe(2);
        expect(array[1]).toBe(3);
    });

    it("should remove array", () => {
        const array = sequenceOf(1, 2, 3, 4, 5)
            .minus([2, 4])
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(3);
        expect(array[2]).toBe(5);
    });

    it("should append sequence", () => {
        const array = sequenceOf(1, 2, 3)
            .minus(sequenceOf(1, 2))
            .toArray();
        expect(array.length).toBe(1);
        expect(array[0]).toBe(3);
    });

    it("should append empty sequence", () => {
        const array = sequenceOf(1, 2, 3)
            .minus(emptySequence())
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
    });
});