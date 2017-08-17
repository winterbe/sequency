import {sequenceOf} from "../src/Sequence";

test('filterNotNull', () => {
    const array = sequenceOf(1, null, 2, null, 3)
        .filterNotNull()
        .toArray();

    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
});