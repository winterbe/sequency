import Sequence from "./Sequence";

export class SingleOrNull {

    /**
     * Returns the single element of the sequence or `null` if the sequence has more than
     * one element or none at all. If a `predicate` is passed returns the single element matching
     * the predicate or `null` if more or less than one element match the predicate.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {T}
     */
    singleOrNull<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T | null {
        if (predicate != null) {
            return this.filter(predicate).singleOrNull();
        }
        const first = this.iterator.next();
        if (first.done) {
            return null;
        }
        if (!this.iterator.next().done) {
            return null;
        }
        return first.value;
    }

}