import {emptySequence, sequenceOf} from "../src/Sequence";

describe("foldIndexed", () => {
    it("should 23 + sum of all numbers and indices", () => {
        const result = sequenceOf(1, 2, 3)
            .foldIndexed(23, (index: number, acc: number, element: number) => acc + element + index);
        expect(result).toBe(32);
    });

    it("should return initial value on empty sequence", () => {
        const result = emptySequence()
            .foldIndexed(23, (index: number, acc: number, element: number) => acc + element + index);
        expect(result).toBe(23);
    });
});