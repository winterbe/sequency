import {sequenceOf} from "../src/Sequence";

describe("elementAtOrNull", () => {
    it("should return element at first index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(0);
        expect(item).toBe(1);
    });

    it("should return element at middle index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(1);
        expect(item).toBe(2);
    });

    it("should return element at last index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(2);
        expect(item).toBe(3);
    });

    it("should return null when index out of bounds", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrNull(3);
        expect(item).toBeNull();
    });
});