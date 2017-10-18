import {range} from "../src/Sequence";

describe("range", () => {
    it("should create range of numbers with step = 1", () => {
        const numbers = range(0, 5).toArray();
        expect(numbers).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it("should create range of numbers with step = .5", () => {
        const numbers = range(0, 4, .5).toArray();
        expect(numbers).toEqual([0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4.0]);
    });

    it("should create empty sequence", () => {
        const numbers = range(0, 0).toArray();
        expect(numbers).toEqual([]);
    });

    it("should throw on invalid boundaries", () => {
        expect(() => range(1, 0)).toThrow();
    });
});