import Sequence from "./Sequence";

/**
 * Returns the number of elements of this sequence. If `predicate` is present, returns
 * the number of elements matching the given `predicate`.
 *
 * @param {(T) => boolean} predicate
 * @returns {number}
 */
function count<T>(this: Sequence<T>, predicate?: (T) => boolean): number {
    let num = 0;
    if (predicate == null) {
        while (this.iterator.hasNext()) {
            this.iterator.next();
            num++;
        }
    } else {
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (predicate(item)) {
                num++;
            }
        }
    }
    return num;
}

export default count;