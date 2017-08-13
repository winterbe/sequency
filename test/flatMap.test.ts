import {asSequence, sequenceOf} from "../src/Sequence";

test('flatMap', () => {
    const array = sequenceOf([1, 2], [3, 4], [5, 6])
        .flatMap(it => asSequence(it))
        .toArray();

    expect(array.length).toBe(6);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
    expect(array[3]).toBe(4);
    expect(array[4]).toBe(5);
    expect(array[5]).toBe(6);
});
