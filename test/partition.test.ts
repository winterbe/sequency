import {sequenceOf} from "../src/Sequence";

describe("partition", () => {
    it("should partition based on the given predicate", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .partition(it => it % 2 === 1);

        expect(result.true.length).toBe(2);
        expect(result.true[0]).toBe(1);
        expect(result.true[1]).toBe(3);

        expect(result.false.length).toBe(2);
        expect(result.false[0]).toBe(2);
        expect(result.false[1]).toBe(4);
    });
});