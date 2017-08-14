import {sequenceOf} from "../src/Sequence";

describe("take", () => {
    it("should take first 2 items", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .take(2)
            .toArray();
        expect(result.length).toBe(2);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
    });

    it("should take no items", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .take(0)
            .toArray();
        expect(result.length).toBe(0);
    });

    it("should take all items even if overflow", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .take(10)
            .toArray();
        expect(result.length).toBe(4);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
    });

    it("should take nothing for n < 0", () => {
        const result = sequenceOf(1, 2, 3)
            .take(-10)
            .toArray();
        expect(result.length).toBe(0);
    });
});