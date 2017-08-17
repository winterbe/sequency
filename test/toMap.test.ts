import {asSequence} from "../src/Sequence";

describe("toMap", () => {
    it("should return items as new map", () => {
        const key1 = {k: 1};
        const key2 = {k: 2};
        const key3 = {k: 3};
        const array: Array<[object, string]> = [[key1, "a"], [key2, "b"], [key3, "c"]];
        const map = asSequence(array)
            .toMap();
        expect(map.size).toBe(3);
        expect(map.get(key1)).toBe("a");
        expect(map.get(key2)).toBe("b");
        expect(map.get(key3)).toBe("c");
    });

    it("should append items to passed map", () => {
        const key0 = {k: 0};
        const key1 = {k: 1};
        const key2 = {k: 2};
        const key3 = {k: 3};

        const existingMap = new Map();
        existingMap.set(key0, "_");

        const array: Array<[object, string]> = [[key1, "a"], [key2, "b"], [key3, "c"]];
        const result = asSequence(array)
            .toMap(existingMap);

        expect(result.size).toBe(4);
        expect(result.get(key0)).toBe("_");
        expect(result.get(key1)).toBe("a");
        expect(result.get(key2)).toBe("b");
        expect(result.get(key3)).toBe("c");
    });
});