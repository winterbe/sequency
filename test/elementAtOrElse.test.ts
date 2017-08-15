import {sequenceOf} from "../src/Sequence";

describe("elementAtOrElse", () => {
    it("should return element at first index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(0, () => -1);
        expect(item).toBe(1);
    });

    it("should return element at middle index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(1, () => -1);
        expect(item).toBe(2);
    });

    it("should return element at last index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(2, () => -1);
        expect(item).toBe(3);
    });

    it("should return default value when index out of bounds", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(3, () => 1234);
        expect(item).toBe(1234);
    });
});