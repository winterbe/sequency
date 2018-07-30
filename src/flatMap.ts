import Sequence, {createSequence} from "./Sequence";

class FlatMapIterator<S, T> implements Iterator<T> {
    private current: Iterator<T> | undefined;

    constructor(private readonly transform: (item: S) => Sequence<T>,
                private readonly iterator: Iterator<S>) {
    }

    next(value?: any): IteratorResult<T> {
        if (this.current != null) {
            const item = this.current.next();
            if (!item.done) {
                return item;
            }
        }
        const next = this.iterator.next();
        if (!next.done) {
            const sequence = this.transform(next.value);
            this.current = sequence.iterator;
            return this.next();
        }
        return {done: true, value: undefined as any};
    }
}

export class FlatMap {

    /**
     * Transforms each element into a sequence of items and returns a flat single sequence of all those items.
     *
     * @param {(value: S) => Sequence<T>} transform
     * @returns {Sequence<T>}
     */
    flatMap<S, T>(this: Sequence<S>, transform: (value: S) => Sequence<T>): Sequence<T> {
        return createSequence(new FlatMapIterator(transform, this.iterator));
    }

}