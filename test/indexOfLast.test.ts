import {sequenceOf} from "../src/Sequence";

describe("indexOfLast", () => {
    it("should return index of last element matching given predicate", () => {
        const index = sequenceOf(1, 2, 2, 1)
            .indexOfLast(it => it > 1);
        expect(index).toBe(2);
    });
});