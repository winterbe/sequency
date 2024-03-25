import { range, sequenceOf } from "../src/Sequence";

describe("isNotEmpty", () => {
    it("returns true for infinite sequences", () => {
        expect(range(0, Infinity).isNotEmpty()).toBeTruthy();
    });

    it("returns false for empty sequences", () => {
        expect(sequenceOf().isNotEmpty()).toBeFalsy();
    });

    it("returns false for sequences that would be empty", () => {
        expect(sequenceOf(1, 3).filter(x => x % 2 === 0).isNotEmpty()).toBeFalsy();
    });

    it("returns true for sequences that would not be empty", () => {
        expect(sequenceOf(1, 3).filter(x => x % 2 !== 0).isNotEmpty()).toBeTruthy();
    });
});
