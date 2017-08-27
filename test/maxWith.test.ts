import {emptySequence, sequenceOf} from "../src/Sequence";

describe("maxWith", () => {
    it("should return max element by comparator", () => {
        const num = sequenceOf({a: 1}, {a: 3}, {a: 2})
            .maxWith((o1, o2) => o1.a > o2.a ? 1 : (o1.a < o2.a ? -1 : 0));
        expect(num).toEqual({a: 3});
    });

    it("should return null on empty sequence", () => {
        const num = emptySequence()
            .maxWith(() => void(0));
        expect(num).toBeNull();
    });
});