import {sequenceOf} from "../src/Sequence";

describe("sorted", () => {
    it("should sort numbers ascending", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe(1);
        expect(array[1]).toBe(2);
        expect(array[2]).toBe(3);
        expect(array[3]).toBe(4);
        expect(array[4]).toBe(5);
    });

    it("should sort strings ascending", () => {
        const array = sequenceOf("1", "4", "3", "5", "2")
            .sorted()
            .toArray();
        expect(array.length).toBe(5);
        expect(array[0]).toBe("1");
        expect(array[1]).toBe("2");
        expect(array[2]).toBe("3");
        expect(array[3]).toBe("4");
        expect(array[4]).toBe("5");
    });

    it("should sort numbers by natural order", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted(it => it.naturalOrder())
            .toArray();
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it("should sort numbers by natural order reversed", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted(it => it.naturalOrder()
                .reversed())
            .toArray();
        expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it("should sort numbers by reverse order", () => {
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted(it => it.reverseOrder())
            .toArray();
        expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it("should sort by given compareFn", () => {
        const fn = (a, b) => a < b ? 1 : a > b ? -1 : 0;
        const array = sequenceOf(1, 4, 3, 5, 2)
            .sorted(it => it.compare(fn))
            .toArray();
        expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it("should sort by comparing the given property", () => {
        const array = sequenceOf({x: 2}, {x: 1}, {x: 3})
            .sorted(it => it.compareBy(it => it.x))
            .toArray();
        expect(array).toEqual([{x: 1}, {x: 2}, {x: 3}]);
    });

    it("should sort by comparing the given key", () => {
        const array = sequenceOf({x: 2}, {x: 1}, {x: 3})
            .sorted(it => it.compareBy("x"))
            .toArray();
        expect(array).toEqual([{x: 1}, {x: 2}, {x: 3}]);
    });

    it("should sort by comparing the given property in reversed order", () => {
        const array = sequenceOf({x: 2}, {x: 1}, {x: 3})
            .sorted(it => it.compareBy(it => it.x)
                .reversed())
            .toArray();
        expect(array).toEqual([{x: 3}, {x: 2}, {x: 1}]);
    });

    it("should sort by comparing the given property descending", () => {
        const array = sequenceOf({x: 2}, {x: 1}, {x: 3})
            .sorted(it => it.compareByDescending(it => it.x))
            .toArray();
        expect(array).toEqual([{x: 3}, {x: 2}, {x: 1}]);
    });

    it("should sort by comparing the given key descending", () => {
        const array = sequenceOf({x: 2}, {x: 1}, {x: 3})
            .sorted(it => it.compareByDescending("x"))
            .toArray();
        expect(array).toEqual([{x: 3}, {x: 2}, {x: 1}]);
    });

    it("should sort by comparing the given property then other property", () => {
        const array = sequenceOf({x: 2, y: 2}, {x: 1, y: 2}, {x: 1, y: 1})
            .sorted(it => it.compareBy(it => it.x)
                .thenBy(it => it.y))
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toEqual({x: 1, y: 1});
        expect(array[1]).toEqual({x: 1, y: 2});
        expect(array[2]).toEqual({x: 2, y: 2});
    });

    it("should sort by comparing the given key then other key", () => {
        const array = sequenceOf({x: 2, y: 2}, {x: 1, y: 2}, {x: 1, y: 1})
            .sorted(it => it.compareBy("x")
                .thenBy("y"))
            .toArray();
        expect(array.length).toBe(3);
        expect(array[0]).toEqual({x: 1, y: 1});
        expect(array[1]).toEqual({x: 1, y: 2});
        expect(array[2]).toEqual({x: 2, y: 2});
    });

    it("should order nulls last", () => {
        const array = sequenceOf({x: 2}, null, {x: 1}, {x: 3}, null)
            .sorted(it => it.nullsLast()
                .thenBy(it => it.x))
            .toArray();
        expect(array).toEqual([{x: 1}, {x: 2}, {x: 3}, null, null]);
    });

    it("should order nulls first then by descending selected property", () => {
        const array = sequenceOf({x: 2}, null, {x: 1}, {x: 3}, null)
            .sorted(it => it.nullsFirst()
                .thenByDescending(it => it.x))
            .toArray();
        expect(array).toEqual([null, null, {x: 3}, {x: 2}, {x: 1}]);
    });

    it("should order nulls first then by descending key", () => {
        const array = sequenceOf({x: 2}, null, {x: 1}, {x: 3}, null)
            .sorted(it => it.nullsFirst()
                .thenByDescending("x"))
            .toArray();
        expect(array).toEqual([null, null, {x: 3}, {x: 2}, {x: 1}]);
    });
});