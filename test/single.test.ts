import {emptySequence, sequenceOf} from "../src/Sequence";
import single from "../src/single";

describe("single", () => {
    it("should return single element", () => {
        const result = sequenceOf(23)
            .single();
        expect(result).toBe(23)
    });

    it("should throw with more than one element", () => {
        expect(
            () => sequenceOf(1, 2).single()
        ).toThrow();
    });

    it("should throw with zero elements", () => {
        expect(
            () => emptySequence().single()
        ).toThrow();
    });

    it("should evaluate predicate and return single element", () => {
        const result = sequenceOf(1, 2, 3)
            .single(it => it > 2);
        expect(result).toBe(3)
    });

    it("should evaluate predicate and throw with more than one element", () => {
        expect(
            () => sequenceOf(1, 2)
                .single(it => it > 0)
        ).toThrow();
    });

    it("should evaluate predicate and throw with zero elements", () => {
        expect(
            () => sequenceOf(1, 2, 3)
                .single(it => it > 3)
        ).toThrow();
    });
});