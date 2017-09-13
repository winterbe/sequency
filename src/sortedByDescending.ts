import Sequence from "./Sequence";

/**
 * Returns a new sequence with all elements sorted descending by the value specified
 * by the given `selector` function.
 *
 * @param {(value: T) => R} selector
 * @returns {Sequence<T>}
 */
function sortedByDescending<T, R>(this: Sequence<T>, selector: (value: T) => R): Sequence<T> {
    return this.sorted(it => it.compareByDescending(selector));
}

export default sortedByDescending;