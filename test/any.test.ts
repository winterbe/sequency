import {sequenceOf} from "../src/index";

describe("any", () => {
    it('should return false', () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 3)
            .any();
        expect(result).toBe(false);
    });

    it('should return true', () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 1)
            .any();
        expect(result).toBe(true);
    });

    it('should evaluate predicate and return false', () => {
        const result = sequenceOf(1, 2, 3)
            .any(it => it > 3);
        expect(result).toBe(false);
    });

    it('should evaluate predicate and return true', () => {
        const result = sequenceOf(1, 2, 3)
            .any(it => it > 2);
        expect(result).toBe(true);
    });
});