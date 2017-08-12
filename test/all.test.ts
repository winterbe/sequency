import {sequenceOf} from "../src/index";

describe("all", () => {
    it('should return false', () => {
        const result = sequenceOf(1, 2, 3)
            .all(it => it > 1);
        expect(result).toBe(false);
    });

    it('should return true', () => {
        const result = sequenceOf(1, 2, 3)
            .all(it => it > 0);
        expect(result).toBe(true);
    });
});