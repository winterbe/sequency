import { asSelector } from "./asSelector";
import Sequence from "./Sequence";

export interface SortedByDescendingOperator {
    /**
     * Returns a new sequence with all elements sorted descending by the value specified
     * by the given `selector` function.
     *
     * @param {(value: T) => R} selector
     * @returns {Sequence<T>}
     */
     sortedByDescending<T, R>(this: Sequence<T>, selector: (value: T) => R): Sequence<T>;

     /**
      * Returns a new sequence with all elements sorted in descending order of values for the given `key`.
      *
      * @param {keyof T} key
      * @returns {Sequence<T>}
      */
    sortedByDescending<T>(this: Sequence<T>, key: keyof T): Sequence<T>;
}

export class SortedByDescending implements SortedByDescendingOperator {

    sortedByDescending<T>(this: Sequence<T>, keyOrSelector: keyof T | ((value: T) => any)): Sequence<T> {
        const selector = asSelector(keyOrSelector);
        return this.sorted(it => it.compareByDescending(selector));
    }

}