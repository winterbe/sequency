import {sequenceOf} from "../src/Sequence";

describe("associateBy", () => {
    it("should associate map by keySelector", () => {
        const a = {k: 1, v: 11};
        const b = {k: 2, v: 22};
        const c = {k: 3, v: 33};

        const map = sequenceOf(a, b, c)
            .associateBy(it => it.k);

        expect(map.size).toBe(3);
        expect(map.get(1)).toBe(a);
        expect(map.get(2)).toBe(b);
        expect(map.get(3)).toBe(c);
    });

    it("should associate map by keySelector and valueTransformer", () => {
        const a = {k: 1, v: 11};
        const b = {k: 2, v: 22};
        const c = {k: 3, v: 33};

        const map = sequenceOf(a, b, c)
            .associateBy(
                it => it.k,
                it => it.v
            );

        expect(map.size).toBe(3);
        expect(map.get(1)).toBe(11);
        expect(map.get(2)).toBe(22);
        expect(map.get(3)).toBe(33);
    });

    it("latest entries should win in case of duplicates", () => {
        const a = {k: 1, v: 11};
        const b = {k: 2, v: 22};
        const c = {k: 3, v: 33};
        const d = {k: 2, v: 222};

        const map = sequenceOf(a, b, c, d)
            .associateBy(
                it => it.k,
                it => it.v
            );

        expect(map.size).toBe(3);
        expect(map.get(1)).toBe(11);
        expect(map.get(2)).toBe(222);
        expect(map.get(3)).toBe(33);
    });
});