import Sequence from "./Sequence";

export class MapIndexed {

    /**
     * Transforms each element into another value by applying the given `transform` function and returns a new sequence.
     *
     * @param {(index: number, value: T) => R} transform
     * @returns {Sequence<R>}
     */
    mapIndexed<T, R>(this: Sequence<T>, transform: (index: number, value: T) => R): Sequence<R> {
        return this.withIndex()
            .map(it => transform(it.index, it.value));
    }

}