import Sequence from "./Sequence";

/**
 * Returns the single element of the sequence or `null` if the sequence has more than
 * one element or none at all. If a `predicate` is passed returns the single element matching
 * the predicate or `null` if more or less than one element match the predicate.
 *
 * @param {(value: T) => boolean} predicate
 * @returns {T}
 */
function singleOrNull<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T | null {
    if (predicate != null) {
        return this.filter(predicate).singleOrNull();
    }
    if (!this.iterator.hasNext()) {
        return null;
    }
    const item = this.iterator.next();
    if (this.iterator.hasNext()) {
        return null;
    }
    return item;
}

export default singleOrNull;