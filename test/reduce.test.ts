import {sequenceOf} from "../src/Sequence";

describe("reduce", () => {
    it("should sum all numbers", () => {
        const result = sequenceOf(1, 2, 3)
            .reduce((acc: number, value: number) => acc + value);
        expect(result).toBe(6);
    });

    it("should concat all strings", () => {
        const result = sequenceOf("a", "b", "c")
            .reduce((acc: string, value: string) => `${acc}, ${value}`);
        expect(result).toBe("a, b, c");
    });
});