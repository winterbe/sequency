import Sequence from "./Sequence";

/**
 * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise throws
 * an error.
 *
 * @param {(T) => boolean} predicate
 * @returns {T}
 */
function first<T>(this: Sequence<T>, predicate?: (T) => boolean): T {
    const result = this.firstOrNull(predicate);
    if (result == null) {
        throw new Error("No such element");
    }
    return result;
}

export default first;