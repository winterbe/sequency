import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted be the given `compare` function.
 *
 * @param {(a: T, b: T) => number} comparison
 * @returns {Sequence<T>}
 */
function sortedWith<T>(this: Sequence<T>, comparison: (a: T, b: T) => number): Sequence<T> {
    return this.sorted(it => it.compare(comparison));
}

export default sortedWith;