import {sequenceOf} from "../src/Sequence";

describe("indexOf", () => {
    it("should return index of element", () => {
        const index = sequenceOf(1, 2, 3)
            .indexOf(3);
        expect(index).toBe(2);
    });

    it("should return -1 if element not found", () => {
        const index = sequenceOf(1, 2, 3)
            .indexOf(4);
        expect(index).toBe(-1);
    });
});