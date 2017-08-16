import {emptySequence, sequenceOf} from "../src/Sequence";

describe("fold", () => {
    it("should 23 + sum of all numbers", () => {
        const result = sequenceOf(1, 2, 3)
            .fold(23, (acc: number, value: number) => acc + value);
        expect(result).toBe(29);
    });

    it("should return initial value on empty sequence", () => {
        const result = emptySequence()
            .fold(23, (acc: number, value: number) => acc + value);
        expect(result).toBe(23);
    });
});