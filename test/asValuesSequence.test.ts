import { asValuesSequence } from "../src/Sequence";

describe("asValuesSequence", () => {
    it("should create sequence from object values", () => {
        const array = asValuesSequence({ "a": 1, "b": 2, "c": 3 } as const)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
    });

    it("should create sequence from Map values", () => {
        const array = asValuesSequence(new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ] as const))
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
    });

    it("should create sequence from Set values", () => {
        const array = asValuesSequence(new Set([
            "a",
            "b",
            "c",
        ] as const))
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("a");
        expect(array[1]).toBe("b");
        expect(array[2]).toBe("c");
    });

    it("should create sequence from array values", () => {
        const array = asValuesSequence([
            "a",
            "b",
            "c",
        ] as const)
            .toArray();

        expect(array.length).toBe(3);
        expect(array[0]).toBe("a");
        expect(array[1]).toBe("b");
        expect(array[2]).toBe("c");
    });

    it("should throw understandable error message if input is null", () => {
        expect(
            () => asValuesSequence(null as any)
        ).toThrowError("Cannot create values sequence for input: null");
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
        { input: function* () { yield 42 } },
    ])("should throw understandable error message if input is non-object: %p", ({ input }) => {
        expect(
            () => asValuesSequence(input as any)
        ).toThrowError("Cannot create values sequence for non-object input");
    });
});
