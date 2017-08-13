import {emptySequence} from "../src/Sequence";

describe("emptySequence", () => {
    it("should return empty array", () => {
        const result = emptySequence().toArray();
        expect(result.length).toBe(0);
    });
});