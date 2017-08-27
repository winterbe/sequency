import Sequence, {emptySequence, sequenceOf} from "../src/Sequence";

describe("average", () => {
    it("should calculate average", () => {
        const avg = sequenceOf(1, 2, 3, 4)
            .average();
        expect(avg).toBe(2.5);
    });

    it("should return NaN on empty sequence", () => {
        const sequence = emptySequence() as Sequence<number>;
        const avg = sequence.average();
        expect(avg).toBeNaN();
    });
});