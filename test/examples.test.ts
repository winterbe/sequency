import {asSequence, generateSequence, sequenceOf} from "../src/Sequence";

describe("examples", () => {

    it("should be beer-o-clock", () => {
        const result = sequenceOf("🍻", "🍻")
            .flatMap(it => sequenceOf("🍺", "🍺"))
            .toArray();
        expect(result).toEqual(["🍺", "🍺", "🍺", "🍺"]);
    });

    it("should generate sequence of fibonacci numbers", () => {
        const nums =
            generateSequence([0, 1], ([a, b]) => [b, a + b])
                .map(([a, _]) => a)
                .take(10)
                .toArray();
        expect(nums).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it("should iterate over chars of the given string", () => {
        const result = asSequence("abc")
            .toArray();
        expect(result).toEqual(["a", "b", "c"]);
    });

    it("should create sequences from es6 generators", () => {
        function* generator() {
            let i = 0;
            while (true) {
                yield i++;
            }
        }

        const result = asSequence(generator())
            .take(3)
            .toArray();
        expect(result).toEqual([0, 1, 2]);
    });

});