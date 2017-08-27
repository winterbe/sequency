import Sequence from "./Sequence";

/**
 * Returns the minimum element of the sequence or `null` if sequence is empty.
 *
 * @returns {T}
 */
function min<T>(this: Sequence<T>): T | null {
    let min: T | null = null;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (min == null || item < min) {
            min = item;
        }
    }
    return min;
}

export default min;