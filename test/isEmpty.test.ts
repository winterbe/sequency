import { range, sequenceOf } from "../src/Sequence";

describe("isEmpty", () => {
    it("returns false for infinite sequences", () => {
        expect(range(0, Infinity).isEmpty()).toBeFalsy();
    });

    it("returns true for empty sequences", () => {
        expect(sequenceOf().isEmpty()).toBeTruthy();
    });

    it("returns true for sequences that would be empty", () => {
        expect(sequenceOf(1, 3).filter(x => x % 2 === 0).isEmpty()).toBeTruthy();
    });

    it("returns false for sequences that would not be empty", () => {
        expect(sequenceOf(1, 3).filter(x => x % 2 !== 0).isEmpty()).toBeFalsy();
    });
});
