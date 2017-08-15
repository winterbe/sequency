import {sequenceOf} from "../src/Sequence";

describe("elementAt", () => {
    it("should return element at first index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAt(0);
        expect(item).toBe(1);
    });

    it("should return element at middle index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAt(1);
        expect(item).toBe(2);
    });

    it("should return element at last index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAt(2);
        expect(item).toBe(3);
    });

    it("should throw error when index out of bounds", () => {
        expect(
            () => sequenceOf(1, 2, 3).elementAt(3)
        ).toThrow();
    });
});