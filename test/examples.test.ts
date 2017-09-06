import {sequenceOf} from "../src/Sequence";

describe("examples", () => {

    it("should be beer-o-clock", () => {
        const result = sequenceOf("🍻", "🍻", "🍻")
            .flatMap(it => sequenceOf("🍺", "🍺"))
            .toArray();
        expect(result.length).toBe(6);
        result.forEach(it => expect(it).toBe("🍺"));
    });

});