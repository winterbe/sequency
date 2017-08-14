import {sequenceOf} from "../src/Sequence";

describe("indexOfFirst", () => {
    it("should return index of first element matching given predicate", () => {
        const index = sequenceOf(1, 2, 2, 3)
            .indexOfFirst(it => it > 1);
        expect(index).toBe(1);
    });
});