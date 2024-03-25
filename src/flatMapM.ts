import Sequence, { asSequence } from "./Sequence";

export class FlatMapM {
    /**
     * Transforms each element into an iterable of items and returns a flat single sequence of all those items. The M stands for Monadic
     *
     * @param {(value: S) => Iterable<T>} transform
     * @returns {Sequence<T>}
     * @example
     *  asSequence(document.querySelectorAll("form"))
     *      .flatMapM(form => form.querySelectorAll("input"))
     *  // same as
     *  asSequence(document.querySelectorAll("form"))
     *      .map(form => form.querySelectorAll("input"))
     *      .flatMap(asSequence)
     * 
     *
     */
    flatMapM<S, T>(this: Sequence<S>, transform: (value: S) => Iterable<T>): Sequence<T> {
        return this.flatMap(value => asSequence(transform(value)));
    }

}