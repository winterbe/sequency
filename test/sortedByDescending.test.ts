import {sequenceOf} from "../src/Sequence";

describe("sortedByDescending", () => {
    it("should sort in descending order using a selector", () => {
        const a4 = {a: 4};
        const a1 = {a: 1};
        const a3 = {a: 3};
        const a23 = {a: 23};

        const array = sequenceOf(a4, a1, a3, a23)
            .sortedByDescending(it => it.a)
            .toArray();

        expect(array.length).toBe(4);
        expect(array[0]).toBe(a23);
        expect(array[1]).toBe(a4);
        expect(array[2]).toBe(a3);
        expect(array[3]).toBe(a1);
    });
    it("should sort in descending order using a key", () => {
        const a4 = {a: 4};
        const a1 = {a: 1};
        const a3 = {a: 3};
        const a23 = {a: 23};

        const array = sequenceOf(a4, a1, a3, a23)
            .sortedByDescending("a")
            .toArray();

        expect(array.length).toBe(4);
        expect(array[0]).toBe(a23);
        expect(array[1]).toBe(a4);
        expect(array[2]).toBe(a3);
        expect(array[3]).toBe(a1);
    });
});