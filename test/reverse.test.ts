import {sequenceOf} from "../src/Sequence";

describe("reverse", () => {
    it("should reverse order", () => {
        const array = sequenceOf(1, 2, 3)
            .reverse()
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toBe(3);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(1);
    })
});