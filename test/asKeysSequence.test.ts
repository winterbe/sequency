import { asKeysSequence } from "../src/Sequence";

describe("asKeysSequence", () => {
    it("should create sequence from object keys", () => {
        const array = asKeysSequence({ "a": 1, "b": 2, "c": 3 } as const)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("a");
        expect(array[1]).toBe("b");
        expect(array[2]).toBe("c");
    });

    it("should create sequence from Map keys", () => {
        const array = asKeysSequence(new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3]
        ] as const))
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("a");
        expect(array[1]).toBe("b");
        expect(array[2]).toBe("c");
    });

    it("should create sequence from Set values", () => {
        const array = asKeysSequence(new Set([
            "a",
            "b",
            "c"
        ] as const))
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("a");
        expect(array[1]).toBe("b");
        expect(array[2]).toBe("c");
    });

    it("should create sequence from array indexes", () => {
        const array = asKeysSequence([
            "a",
            "b",
            "c"
        ] as const)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe(0);
        expect(array[1]).toBe(1);
        expect(array[2]).toBe(2);
    });

    it("should throw understandable error message if input is null", () => {
        expect(
            () => asKeysSequence(null as any)
        ).toThrowError("Cannot create keys sequence for input: null");
    });

    it.each([
        { input: undefined },
        { input: false },
        { input: true },
        { input: 0 },
        { input: 1 },
        { input: 42 },
        { input: 23.42 },
        { input: NaN },
        { input: Infinity },
        { input: () => 42 },
        { input: function* () { yield 42; } }
    ])("should throw understandable error message if input is non-object: %p", ({ input }) => {
        expect(
            () => asKeysSequence(input as any)
        ).toThrowError("Cannot create keys sequence for non-object input");
    });
});
