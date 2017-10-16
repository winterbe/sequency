import Sequence from "./Sequence";

export class FilterNot {

    /**
     * Returns a new sequence consisting of all elements that don't match the given `predicate`.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {Sequence<T>}
     */
    filterNot<T>(this: Sequence<T>, predicate: (value: T) => boolean): Sequence<T> {
        return this.filter((value: T) => !predicate(value));
    }

}