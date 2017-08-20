import Sequence from "./Sequence";

/**
 * Returns the element at position `index` (zero-based). If `index` is out of bounds returns
 * the result of the given `defaultValue` function.
 *
 * @param {number} index
 * @param defaultValue
 * @returns {T}
 */
function elementAtOrElse<T>(this: Sequence<T>, index: number, defaultValue: (index: number) => T): T {
    let i = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (i === index) {
            return item;
        }
        i++;
    }
    return defaultValue(index);
}

export default elementAtOrElse;