import {sequenceOf} from "../src/Sequence";

describe("sumBy", () => {
    it("should sum all selected numbers", () => {
        const result = sequenceOf({a: 2}, {a: 4}, {a: 6})
            .sumBy(it => it.a);
        expect(result).toBe(12);
    });
});