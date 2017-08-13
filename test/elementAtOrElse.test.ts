import {sequenceOf} from "../src/Sequence";

describe("elementAtOrElse", () => {
    it("should return element at given index", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(0, () => -1);
        expect(item).toBe(1);
    });

    it("should return default value when index out of bounds", () => {
        const item = sequenceOf(1, 2, 3)
            .elementAtOrElse(3, () => 1234);
        expect(item).toBe(1234);
    });
});