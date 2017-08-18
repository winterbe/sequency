import {asSequence} from "../src/Sequence";

describe("asSequence", () => {
    it('should create sequence from array', () => {
        const array = asSequence([1, 2, 3])
            .filter(it => it > 1)
            .map(it => `num ${it}`)
            .toArray();

        expect(array.length).toBe(2);
        expect(array[0]).toBe('num 2');
        expect(array[1]).toBe('num 3');
    });

    it('should create sequence from object keys', () => {
        const keys = (Object as any).keys({'a': 1, 'b': 2, 'c': 3});
        const array = asSequence(keys)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe('a');
        expect(array[1]).toBe('b');
        expect(array[2]).toBe('c');
    });

    it('should create sequence from object values', () => {
        const values = (Object as any).values({'a': 1, 'b': 2, 'c': 3});
        const array = asSequence(values)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
    });

    it('should create sequence from set', () => {
        const array = asSequence(new Set([1, 2, 3]))
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
    });

    it('should create sequence from map', () => {
        const map = new Map();
        map.set("a", 1);
        map.set("b", 2);
        map.set("c", 3);

        const array = asSequence(map)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toEqual(["a", 1]);
        expect(array[1]).toEqual(["b", 2]);
        expect(array[2]).toEqual(["c", 3]);
    });
});