import Sequence from "./Sequence";

/**
 * Returns a new sequence with all elements sorted in reverse (descending) natural order.
 *
 * @returns {Sequence<T>}
 */
function sortedDescending<T>(this: Sequence<T>): Sequence<T> {
    return this.sorted(it => it.reverseOrder());
}

export default sortedDescending;