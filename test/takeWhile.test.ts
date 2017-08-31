import {sequenceOf} from "../src/Sequence";

describe("takeWhile", () => {
    it("should take elements until predicate evaluates to false", () => {
        const result = sequenceOf(1, 2, 3, 2, 1)
            .takeWhile(it => it < 3)
            .toArray();
        expect(result.length).toBe(2);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
    });

    it("should take no elements", () => {
        const result = sequenceOf(1, 2, 3)
            .takeWhile(it => it > 3)
            .toArray();
        expect(result.length).toBe(0);
    });

    it("should take all elements", () => {
        const result = sequenceOf(1, 2, 3)
            .takeWhile(it => it > 0)
            .toArray();
        expect(result.length).toBe(3);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
    });
});