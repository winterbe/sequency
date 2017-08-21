import Sequence from "./Sequence";

/**
 * Returns the last element of the sequence or the last element matching `predicate` if present, otherwise throws
 * an error.
 *
 * @param {(value: T) => boolean} predicate
 * @returns {T}
 */
function last<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T {
    const result = this.lastOrNull(predicate);
    if (result == null) {
        throw new Error("No such element");
    }
    return result;
}

export default last;