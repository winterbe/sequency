import {sequenceOf} from "../src/Sequence";

describe("mapIndexed", () => {
    it("should map elements by index and value", () => {
        const array = sequenceOf(1, 2, 3)
            .mapIndexed((index, value) => `${index}: ${value}`)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("0: 1");
        expect(array[1]).toBe("1: 2");
        expect(array[2]).toBe("2: 3");
    });
});