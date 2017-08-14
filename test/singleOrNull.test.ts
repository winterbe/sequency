import {emptySequence, sequenceOf} from "../src/Sequence";
import single from "../src/single";

describe("singleOrNull", () => {
    it("should return single element", () => {
        const result = sequenceOf(23)
            .singleOrNull();
        expect(result).toBe(23)
    });

    it("should return null with more than one element", () => {
        const result = sequenceOf(1, 2)
            .singleOrNull();
        expect(result).toBeNull();
    });

    it("should return null with zero elements", () => {
        const result = emptySequence()
            .singleOrNull();
        expect(result).toBeNull();
    });

    it("should evaluate predicate and return single element", () => {
        const result = sequenceOf(1, 2, 3)
            .singleOrNull(it => it > 2);
        expect(result).toBe(3)
    });

    it("should evaluate predicate and return null with more than one element", () => {
        const result = sequenceOf(1, 2, 3)
            .singleOrNull(it => it > 1);
        expect(result).toBeNull();
    });

    it("should evaluate predicate and return null with zero elements", () => {
        const result = sequenceOf(1, 2, 3)
            .singleOrNull(it => it > 3);
        expect(result).toBeNull();
    });
});