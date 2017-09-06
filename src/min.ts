import Sequence from "./Sequence";

/**
 * Returns the minimum element of the sequence or `null` if sequence is empty.
 *
 * @returns {T}
 */
function min<T>(this: Sequence<T>): T | null {
    let result: T | null = null;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (result == null || item < result) {
            result = item;
        }
    }
    return result;
}

export default min;