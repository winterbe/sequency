import {sequenceOf} from "../src/index";

describe("none", () => {
    it('should return false', () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 1)
            .none();
        expect(result).toBe(false);
    });

    it('should return true', () => {
        const result = sequenceOf(1, 2, 3)
            .filter(it => it > 3)
            .none();
        expect(result).toBe(true);
    });

    it('should evaluate predicate and return false', () => {
        const result = sequenceOf(1, 2, 3)
            .none(it => it > 1);
        expect(result).toBe(false);
    });

    it('should evaluate predicate and return true', () => {
        const result = sequenceOf(1, 2, 3)
            .none(it => it > 3);
        expect(result).toBe(true);
    });
});