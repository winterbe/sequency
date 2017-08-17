import {sequenceOf} from "../src/Sequence";

describe("zip", () => {
    it("should combine items from both sequences into pairs", () => {
        const array = sequenceOf("a", "b", "c")
            .zip(sequenceOf(1, 2, 3))
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toEqual({first: 'a', second: 1});
        expect(array[1]).toEqual({first: 'b', second: 2});
        expect(array[2]).toEqual({first: 'c', second: 3});
    });

    it("should discard elements if length of sequences is different", () => {
        const array = sequenceOf(1, 2, 3)
            .zip(sequenceOf(1, 2, 3, 4, 5, 6, 7))
            .toArray();
        expect(array.length).toBe(3);
    });
});