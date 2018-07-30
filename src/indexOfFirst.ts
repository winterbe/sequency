import Sequence from "./Sequence";

export class IndexOfFirst {

    /**
     * Returns the zero-based index of the first element matching the given `predicate` or -1 if no element matches
     * the predicate.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {number}
     */
    indexOfFirst<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
        let index = 0;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (predicate(item.value)) {
                return index;
            }
            index++;
        }
        return -1;
    }

}
