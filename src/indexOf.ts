import Sequence from "./Sequence";

/**
 * Returns the zero-based index of the given `element` or -1 if the sequence does not contain the element.
 *
 * @param {T} element
 * @returns {number}
 */
function indexOf<T>(this: Sequence<T>, element: T): number {
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (item === element) {
            return index;
        }
        index++;
    }
    return -1;
}

export default indexOf;