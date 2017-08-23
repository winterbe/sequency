import Sequence from "./Sequence";

/**
 * Returns all elements of the sequence as set. If a `set` is passed
 * the elements are added to this set.
 *
 * @param {Set<T>} set
 * @returns {Set<T>}
 */
function toSet<T>(this: Sequence<T>, set?: Set<T>): Set<T> {
    const result = set || new Set();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result.add(item);
    }
    return result;
}

export default toSet;