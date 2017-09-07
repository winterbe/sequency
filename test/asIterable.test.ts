import {sequenceOf} from "../src/Sequence";
import "babel-polyfill";

describe("asIterable", () => {
    it("should return an iterable object conforming to the iterator-protocol", () => {
        const iterable = sequenceOf(1, 2, 3, 4, 5)
            .filter(it => it % 2 === 1)
            .asIterable();

        const iterator = iterable[Symbol.iterator]();
        expect(iterator.next().value).toBe(1);
        expect(iterator.next().value).toBe(3);
        expect(iterator.next().value).toBe(5);
        expect(iterator.next().done).toBe(true);
    });
});