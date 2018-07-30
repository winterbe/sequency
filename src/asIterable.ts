import Sequence from "./Sequence";

export class AsIterable {

    /**
     * Returns an iterable representation of the sequence.
     *
     * @returns {Iterable<T>}
     */
    asIterable<T>(this: Sequence<T>): Iterable<T> {
        const iterator = this.iterator;
        return {
            [Symbol.iterator](): Iterator<T> {
                return iterator;
            }
        };
    }

}