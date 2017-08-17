import {sequenceOf} from "../src/Sequence";

describe("sortedBy", () => {
    it("should sort by the given key ascending", () => {
        const a4 = {a: 4};
        const a1 = {a: 1};
        const a3 = {a: 3};
        const a23 = {a: 23};

        const array = sequenceOf(a4, a1, a3, a23)
            .sortedBy(it => it.a)
            .toArray();

        expect(array.length).toBe(4);
        expect(array[0]).toBe(a1);
        expect(array[1]).toBe(a3);
        expect(array[2]).toBe(a4);
        expect(array[3]).toBe(a23);
    });
});