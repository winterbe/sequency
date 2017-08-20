import Sequence from "./Sequence";

/**
 * Returns a new sequence which discards the first `n` elements;
 *
 * @param {number} n
 * @returns {Sequence<T>}
 */
function drop<T>(this: Sequence<T>, n: number): Sequence<T> {
    return this.withIndex()
        .filterNot(it => it.index < n)
        .map(it => it.value);
}

export default drop;