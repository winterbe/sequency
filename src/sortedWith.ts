import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted be the given `compare` function.
 *
 * @param {(a: T, b: T) => number} compare
 * @returns {Sequence<T>}
 */
function sortedWith<T>(this: Sequence<T>, compare: (a: T, b: T) => number): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort(compare);
    return new Sequence(new IterableIterator(sorted));
}

export default sortedWith;