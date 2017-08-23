import Sequence from "./Sequence";

/**
 * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise throws
 * an error.
 *
 * @param {(T) => boolean} predicate
 * @returns {T}
 */
function first<T>(this: Sequence<T>, predicate?: (T) => boolean): T {
    if (predicate != null) {
        return this.filter(predicate).first();
    }
    if (!this.iterator.hasNext()) {
        throw new Error("No such element");
    }
    return this.iterator.next();
}

export default first;