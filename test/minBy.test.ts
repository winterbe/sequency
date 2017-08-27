import {emptySequence, sequenceOf} from "../src/Sequence";

describe("minBy", () => {
    it("should return min element by selector", () => {
        const num = sequenceOf({a: 1}, {a: 3}, {a: 2})
            .minBy(it => it.a);
        expect(num).toEqual({a: 1});
    });

    it("should return null on empty sequence", () => {
        const num = emptySequence()
            .minBy(() => void(0));
        expect(num).toBeNull();
    });
});