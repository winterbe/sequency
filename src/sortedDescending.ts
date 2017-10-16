import Sequence from "./Sequence";

export class SortedDescending {

    /**
     * Returns a new sequence with all elements sorted in reverse (descending) natural order.
     *
     * @returns {Sequence<T>}
     */
    sortedDescending<T>(this: Sequence<T>): Sequence<T> {
        return this.sorted(it => it.reverseOrder());
    }

}