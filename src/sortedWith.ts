import Sequence from "./Sequence";

export class SortedWith {

    /**
     * Returns a new sequence with all elements sorted be the given `compare` function.
     *
     * @param {(a: T, b: T) => number} comparison
     * @returns {Sequence<T>}
     */
    sortedWith<T>(this: Sequence<T>, comparison: (a: T, b: T) => number): Sequence<T> {
        return this.sorted(it => it.compare(comparison));
    }

}