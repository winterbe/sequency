import {sequenceOf} from "../src/Sequence";

describe("sequenceOf", () => {
    it('filter-map-toArray', () => {
        const array = sequenceOf(1, 2, 3)
            .filter(it => it > 1)
            .map(it => `num ${it}`)
            .toArray();

        expect(array.length).toBe(2);
        expect(array[0]).toBe('num 2');
        expect(array[1]).toBe('num 3');
    });
});