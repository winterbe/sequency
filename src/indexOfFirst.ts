import Sequence from "./Sequence";

/**
 * Returns the zero-based index of the first element matching the given `predicate` or -1 if no element matches
 * the predicate.
 *
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 */
function indexOfFirst<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            return index;
        }
        index++;
    }
    return -1;
}

export default indexOfFirst;