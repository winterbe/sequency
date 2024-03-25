import { asSequence, sequenceOf } from "../src/Sequence";

describe("flatMapM", () => {
    it("should flatten element arrays", () => {
        const array = sequenceOf([1, 2], [3, 4], [5, 6])
            .flatMapM(it => it)
            .toArray();

        expect(array.length).toBe(6);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(4);
        expect(array[4]).toBe(5);
        expect(array[5]).toBe(6);
    });

    it("should flatten iterable iterators", () => {
        const array = asSequence([
            new Map([["a", 1], ["c", 3]]),
            new Map([["b", 2], ["d", 4]]),
        ])
            .flatMapM(map => map.values())
            .toArray();

        expect(array.length).toBe(4);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(3);
        expect(array[2]).toBe(2);
        expect(array[3]).toBe(4);
    });
});