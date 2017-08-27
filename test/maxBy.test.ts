import {emptySequence, sequenceOf} from "../src/Sequence";

describe("maxBy", () => {
    it("should return max element by selector", () => {
        const num = sequenceOf({a: 1}, {a: 3}, {a: 2})
            .maxBy(it => it.a);
        expect(num).toEqual({a: 3});
    });

    it("should return null on empty sequence", () => {
        const num = emptySequence()
            .maxBy(() => void(0));
        expect(num).toBeNull();
    });
});