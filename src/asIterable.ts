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
                return {
                    next(): IteratorResult<T> {
                        if (!iterator.hasNext()) {
                            return { done: true, value: undefined } as any as IteratorResult<T>;
                        }
                        const item = iterator.next();
                        return { done: false, value: item } as any as IteratorResult<T>;
                    }
                };
            }
        };
    }

}