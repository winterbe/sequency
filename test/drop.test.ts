import {sequenceOf} from "../src/Sequence";

describe("drop", () => {
    it("should drop 2 items", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .drop(2)
            .toArray();
        expect(result.length).toBe(2);
        expect(result[0]).toBe(3);
        expect(result[1]).toBe(4);
    });

    it("should drop all items", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .drop(4)
            .toArray();
        expect(result.length).toBe(0);
    });

    it("should drop all items even if overflow", () => {
        const result = sequenceOf(1, 2, 3, 4)
            .drop(10)
            .toArray();
        expect(result.length).toBe(0);
    });

    it("should drop nothing for n = 0", () => {
        const result = sequenceOf(1, 2, 3)
            .drop(0)
            .toArray();
        expect(result.length).toBe(3);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
    });

    it("should drop nothing for n < 0", () => {
        const result = sequenceOf(1, 2, 3)
            .drop(-10)
            .toArray();
        expect(result.length).toBe(3);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
    });
});