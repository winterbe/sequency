import {sequenceOf} from "../src/Sequence";

test('filter', () => {
    const array = sequenceOf(1, 2, 3)
        .filter(it => it > 1)
        .toArray();

    expect(array.length).toBe(2);
    expect(array[0]).toBe(2);
    expect(array[1]).toBe(3);
});