import {generateSequence} from "../src/Sequence";

describe("generateSequence", () => {
    it("should generate sequence", () => {
        let count = 0;
        const result = generateSequence(() => count++)
            .take(5)
            .toArray();
        expect(result.length).toBe(5);
        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(2);
        expect(result[3]).toBe(3);
        expect(result[4]).toBe(4);
    });

    it("should generate sequence with drop and take", () => {
        let count = 0;
        const result = generateSequence(() => count++)
            .drop(5)
            .take(5)
            .toArray();
        expect(result.length).toBe(5);
        expect(result[0]).toBe(5);
        expect(result[1]).toBe(6);
        expect(result[2]).toBe(7);
        expect(result[3]).toBe(8);
        expect(result[4]).toBe(9);
    });

    it("should generate sequence with seed", () => {
        const result = generateSequence(10, value => value + 1)
            .takeWhile(it => it < 15)
            .toArray();
        expect(result.length).toBe(5);
        expect(result[0]).toBe(10);
        expect(result[1]).toBe(11);
        expect(result[2]).toBe(12);
        expect(result[3]).toBe(13);
        expect(result[4]).toBe(14);
    });

    it("should generate empty sequence with seed of null", () => {
        const result = generateSequence(null as number, a => a)
            .count();
        expect(result).toBe(0);
    });

    it("should generate empty sequence with seed of undefined", () => {
        const result = generateSequence(undefined as number, a => a)
            .count();
        expect(result).toBe(0);
    });

    it("should generate sequence with seedFunction", () => {
        const result = generateSequence(() => 10, value => value + 1)
            .takeWhile(it => it < 15)
            .toArray();
        expect(result.length).toBe(5);
        expect(result[0]).toBe(10);
        expect(result[1]).toBe(11);
        expect(result[2]).toBe(12);
        expect(result[3]).toBe(13);
        expect(result[4]).toBe(14);
    });

    it("should generate empty sequence with seedFunction result of null", () => {
        const result = generateSequence(() => null as number, a => a)
            .count();
        expect(result).toBe(0);
    });

    it("should generate empty sequence with seedFunction result of undefined", () => {
        const result = generateSequence(() => undefined as number, a => a)
            .count();
        expect(result).toBe(0);
    });
});