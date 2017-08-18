import {sequenceOf} from "../src/Sequence";

describe("sum", () => {
    it("should sum all numbers", () => {
        const result = sequenceOf(1, 2, 3)
            .sum();
        expect(result).toBe(6);
    });
});