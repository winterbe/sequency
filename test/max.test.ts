import {emptySequence, sequenceOf} from "../src/Sequence";

describe("max", () => {
    it("should return max element", () => {
        const num = sequenceOf(1, 3, 2, 6, 3)
            .max();
        expect(num).toBe(6);
    });

    it("should return null on empty sequence", () => {
        const num = emptySequence()
            .max();
        expect(num).toBeNull();
    });
});