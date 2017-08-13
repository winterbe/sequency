import {sequenceOf} from "../src/Sequence";

describe("elementAt", () => {
    it("should return element at given index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAt(0);
        expect(item).toBe(1);
    });

    it("should throw error when index out of bounds", () => {
        expect(
            () => sequenceOf(1, 2, 3).elementAt(3)
        ).toThrow();
    });
});