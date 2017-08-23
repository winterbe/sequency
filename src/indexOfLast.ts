import Sequence from "./Sequence";

/**
 * Returns the zero-based index of the last element matching the given `predicate` or -1 if no element matches
 * the predicate.
 *
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 */
function indexOfLast<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
    let index = 0;
    let result = -1;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            result = index;
        }
        index++;
    }
    return result;
}

export default indexOfLast;