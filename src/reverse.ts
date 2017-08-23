import Sequence from "./Sequence";

/**
 * Returns a new sequence with all elements of the sequence in reverse order.
 *
 * @returns {Sequence<T>}
 */
function reverse<T>(this: Sequence<T>): Sequence<T> {
    return this.withIndex()
        .sortedByDescending(it => it.index)
        .map(it => it.value);
}

export default reverse;