import {range, sequenceOf} from "../src/Sequence";

describe("distinct", () => {
    it("should dismiss duplicate items", () => {
        const result = sequenceOf(1, 1, 2, 3)
            .distinct()
            .toArray();
        expect(result.length).toBe(3);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
    });

    it.skip("distinct performance test", () => {
        const t0 = Date.now();
        const result = range(1, 1_000_000)
            .distinct()
            .toArray();
        expect(result.length).toBe(1_000_000);
        const took = Date.now() - t0;
        console.log("Took %s ms", took);
    });
});
