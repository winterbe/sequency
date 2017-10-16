import Sequence from "./Sequence";

export class SortedBy {

    /**
     * Returns a new sequence with all elements sorted ascending by the value specified
     * by the given `selector` function.
     *
     * @param {(value: T) => R} selector
     * @returns {Sequence<T>}
     */
    sortedBy<T, R>(this: Sequence<T>, selector: (value: T) => R): Sequence<T> {
        return this.sorted(it => it.compareBy(selector));
    }

}