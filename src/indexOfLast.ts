import Sequence from "./Sequence";

export class IndexOfLast {

    /**
     * Returns the zero-based index of the last element matching the given `predicate` or -1 if no element matches
     * the predicate.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {number}
     */
    indexOfLast<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
        let index = 0;
        let result = -1;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (predicate(item.value)) {
                result = index;
            }
            index++;
        }
        return result;
    }

}