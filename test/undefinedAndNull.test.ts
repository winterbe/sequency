import {asSequence, sequenceOf} from "../src/Sequence";

describe("undefinedAndNull", () => {
    it("should pass null values", () => {
        const result = sequenceOf(1, 2, null, 3, null, null, null, 4)
            .toList();
        expect(result).toEqual([1, 2, null, 3, null, null, null, 4]);
    });

    it("should pass undefined values", () => {
        const result = sequenceOf(1, 2, undefined, 3, undefined, undefined, undefined, 4)
            .toList();
        expect(result).toEqual([1, 2, undefined, 3, undefined, undefined, undefined, 4]);
    });

    it("should pass null and undefined values", () => {
        const result = asSequence([1, 2, null, null, 3, undefined, undefined, 4])
            .filter(it => it == null || it % 2 === 1)
            .map(it => String(it))
            .toList();
        expect(result).toEqual(["1", "null", "null", "3", "undefined", "undefined"]);
    });
});