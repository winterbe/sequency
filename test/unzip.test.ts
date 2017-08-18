import {sequenceOf} from "../src/Sequence";

describe("unzip", () => {
    it("should unzip items", () => {
        const [first, second] = sequenceOf("a", "b", "c")
            .zip(sequenceOf(1, 2, 3))
            .unzip();

        expect(first.length).toBe(3);
        expect(first[0]).toBe("a");
        expect(first[1]).toBe("b");
        expect(first[2]).toBe("c");

        expect(second.length).toBe(3);
        expect(second[0]).toBe(1);
        expect(second[1]).toBe(2);
        expect(second[2]).toBe(3);
    });
});