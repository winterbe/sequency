import Sequence from "./Sequence";

/**
 * Returns `true` if the sequence contains the given `element`.
 *
 * @param {T} element
 * @returns {boolean}
 */
function contains<T>(this: Sequence<T>, element: T): boolean {
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (element === item) {
            return true;
        }
    }
    return false;
}

export default contains;