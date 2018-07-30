import Sequence from "./Sequence";

export class ToSet {

    /**
     * Returns all elements of the sequence as set. If a `set` is passed
     * the elements are added to this set.
     *
     * @param {Set<T>} set
     * @returns {Set<T>}
     */
    toSet<T>(this: Sequence<T>, set?: Set<T>): Set<T> {
        const result = set || new Set();
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result.add(item.value);
        }
        return result;
    }

}