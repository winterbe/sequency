import {generateSequence, sequenceOf} from "../src/Sequence";

describe("examples", () => {

    it("should be beer-o-clock", () => {
        const result = sequenceOf("🍻", "🍻", "🍻")
            .flatMap(it => sequenceOf("🍺", "🍺"))
            .toArray();
        expect(result.length).toBe(6);
        result.forEach(it => expect(it).toBe("🍺"));
    });

    it("should generate sequence of fibonacci numbers", () => {
        const nums = generateSequence([0, 1], ([a, b]) => [b, a + b])
            .map(([a, _]) => a)
            .takeWhile(a => a < 35)
            .toArray();
        expect(nums).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

});