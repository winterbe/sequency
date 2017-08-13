import {sequenceOf} from "../src/Sequence";

describe("first", () => {
    it('should return first element of sequence', () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 2)
            .first();
        expect(result).toBe(3);
    });

    it('should throw error on empty sequence', () => {
        expect(
            () => sequenceOf(1, 2, 3)
                .filter(it => it > 3)
                .first()
        ).toThrow('No such element');
    });

    it('should return first element matching predicate', () => {
        const result = sequenceOf(1, 2, 3)
            .first(it => it > 2);
        expect(result).toBe(3);
    });
});