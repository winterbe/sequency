import {sequenceOf} from "../src/Sequence";

describe("elementAtOrNull", () => {
    it("should return element at given index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(0);
        expect(item).toBe(1);
    });

    it("should return null when index out of bounds", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(3);
        expect(item).toBeNull();
    });
});