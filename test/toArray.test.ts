import {sequenceOf} from "../src/index";

test('toArray', () => {
    const array = sequenceOf(1, 2, 3)
        .toArray();

    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
});