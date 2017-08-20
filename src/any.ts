import Sequence from "./Sequence";

/**
 * Returns `true` if at least one element match the given `predicate`.
 *
 * @param {(T) => boolean} predicate
 * @returns {boolean}
 */
function any<T>(this: Sequence<T>, predicate?: (T) => boolean): boolean {
    if (predicate == null) {
        return this.iterator.hasNext();
    }
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            return true;
        }
    }
    return false;
}

export default any;