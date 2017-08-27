import Sequence from "./Sequence";

/**
 * Returns the maximum element of the sequence or `null` if sequence is empty.
 *
 * @returns {T}
 */
function max<T>(this: Sequence<T>): T | null {
    let max: T | null = null;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (max == null || item > max) {
            max = item;
        }
    }
    return max;
}

export default max;