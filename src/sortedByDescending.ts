import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted descending by the value specified
 * by the given `selector` function.
 *
 * @param {(value: T) => R} selector
 * @returns {Sequence<T>}
 */
function sortedByDescending<T, R>(this: Sequence<T>, selector: (value: T) => R): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort((item1: T, item2: T) => {
        const key1 = selector(item1);
        const key2 = selector(item2);
        if (key1 < key2) {
            return 1;
        }
        if (key1 > key2) {
            return -1;
        }
        return 0;
    });
    return new Sequence(new IterableIterator(sorted));
}

export default sortedByDescending;