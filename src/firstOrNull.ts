import Sequence from "./Sequence";

/**
 * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise returns `null`.
 *
 * @param {(T) => boolean} predicate
 * @returns {T}
 */
function firstOrNull<T>(this: Sequence<T>, predicate?: (T) => boolean): T | null {
    if (predicate != null) {
        return this.filter(predicate).firstOrNull();
    }
    return this.iterator.hasNext()
        ? this.iterator.next()
        : null;
}

export default firstOrNull;