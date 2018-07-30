import Sequence, {createSequence} from "./Sequence";

class ZipIterator<T, S> implements Iterator<[T, S]> {
    constructor(private readonly iterator1: Iterator<T>,
                private readonly iterator2: Iterator<S>) {
    }

    next(value?: any): IteratorResult<[T, S]> {
        const item1 = this.iterator1.next();
        const item2 = this.iterator2.next();
        if (item1.done || item2.done) {
            return {done: true, value: undefined as any};
        } else {
            return {done: false, value: [item1.value, item2.value]};
        }
    }

}

export class Zip {

    /**
     * Returns a new sequence consisting of pairs built the elements of both sequences
     * with the same index. The resulting sequence has the length of the shortest input
     * sequence. All other elements are discarded.
     *
     * @param {Sequence<S>} other
     * @returns {Sequence<[T , S]>}
     */
    zip<T, S>(this: Sequence<T>, other: Sequence<S>): Sequence<[T, S]> {
        return createSequence(new ZipIterator(this.iterator, other.iterator));
    }

}