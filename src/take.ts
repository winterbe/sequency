import Sequence from "./Sequence";

/**
 * Returns a new sequence consisting of the first `n` elements. All other elements
 * are discarded.
 *
 * @param {number} n
 * @returns {Sequence<T>}
 */
export default function take<T>(this: Sequence<T>, n: number): Sequence<T> {
    return this.withIndex()
        .takeWhile(it => it.index < n)
        .map(it => it.value);
}