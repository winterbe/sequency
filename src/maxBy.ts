import Sequence from "./Sequence";

/**
 * Returns the maximum element by comparing the results of the given `selector` function
 * for each element of the sequence or `null` if the sequence is empty.
 *
 * @param {(value: T) => R} selector
 * @returns {T}
 */
function maxBy<T, R>(this: Sequence<T>, selector: (value: T) => R): T | null {
    let max: T | null = null;
    let maxSelected: R | null = null;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const value = selector(item);
        if (maxSelected == null || value > maxSelected) {
            maxSelected = value;
            max = item;
        }
    }
    return max;
}

export default maxBy;