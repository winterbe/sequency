import {sequenceOf} from "../src/Sequence";

describe("firstOrNull", () => {
    it("should return first element of sequence", () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 2)
            .firstOrNull();
        expect(result).toBe(3);
    });

    it("should return null on empty sequence", () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 3)
            .firstOrNull();
        expect(result).toBeNull();
    });

    it("should return first element matching predicate", () => {
        const result = sequenceOf(1, 2, 3)
            .firstOrNull(it => it > 2);
        expect(result).toBe(3);
    });
});