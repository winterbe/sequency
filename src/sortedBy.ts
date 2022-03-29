import { asSelector } from "./asSelector";
import Sequence from "./Sequence";

export interface SortedByOperator {

    /**
     * Returns a new sequence with all elements sorted ascending by the value specified
     * by the given `selector` function.
     *
     * @param {(value: T) => R} selector
     * @returns {Sequence<T>}
     */
    sortedBy<T, R>(this: Sequence<T>, selector: (value: T) => R): Sequence<T>;

    /**
     * Returns a new sequence with all elements sorted in ascending order of values for the given `key`.
     *
     * @param {keyof T} key
     * @returns {Sequence<T>}
     */
    sortedBy<T>(this: Sequence<T>, key: keyof T): Sequence<T>;
}

export class SortedBy implements SortedByOperator {

    sortedBy<T>(this:Sequence<T> , keyOrSelector: keyof T | ((value:T) => any)): Sequence<T> {
        const selector = asSelector(keyOrSelector);
        return this.sorted(it => it.compareBy(selector));
    }

}