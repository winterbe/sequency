import {sequenceOf} from "../src/Sequence";

describe("joinToString", () => {
    it("should join to string using default config", () => {
        const result = sequenceOf(1, 2, 3)
            .joinToString();
        expect(result).toBe("1, 2, 3");
    });

    it("should join to string using different separator", () => {
        const result = sequenceOf(1, 2, 3)
            .joinToString({separator: " | "});
        expect(result).toBe("1 | 2 | 3");
    });

    it("should join to string using different prefix and postfix", () => {
        const result = sequenceOf(1, 2, 3)
            .joinToString({prefix: "[ ", postfix: " ]"});
        expect(result).toBe("[ 1, 2, 3 ]");
    });

    it("should join to string using transform function", () => {
        const result = sequenceOf(1, 2, 3)
            .joinToString({transform: num => `a${num}`});
        expect(result).toBe("a1, a2, a3");
    });

    it("should join to string limiting number of items joined", () => {
        const result = sequenceOf(1, 2, 3, 4, 5)
            .joinToString({limit: 3});
        expect(result).toBe("1, 2, 3, ...");
    });
});