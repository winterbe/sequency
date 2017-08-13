import {sequenceOf} from "../src/Sequence";

describe("contains", () => {
    it("should contain element", () => {
        const result = sequenceOf(1, 2, 3)
            .contains(3);
        expect(result).toBe(true);
    });

    it("should not contain element", () => {
        const result = sequenceOf(1, 2, 3)
            .contains(4);
        expect(result).toBe(false);
    });
});