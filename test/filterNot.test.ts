import {sequenceOf} from "../src/Sequence";

describe("filterNot", () => {
    it("should filter elements", () => {
        const result = sequenceOf(1, 2, 3)
            .filterNot(it => it > 2)
            .toArray();
        expect(result.length).toBe(2);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
    });
});