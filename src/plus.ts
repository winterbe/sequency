import Sequence, {createSequence, isSequence} from "./Sequence";
import SequenceIterator, {IterableIterator} from "./SequenceIterator";

class AppendIterator<T> implements SequenceIterator<T> {
    constructor(private readonly first: SequenceIterator<T>,
                private readonly second: SequenceIterator<T>) {
    }

    hasNext(): boolean {
        return this.first.hasNext() || this.second.hasNext();
    }

    next(): T {
        return this.first.hasNext()
            ? this.first.next()
            : this.second.next();
    }

}

export class Plus {

    /**
     * Appends the given `element` to the end of the sequence and returns a new sequence.
     *
     * @param {T} element
     * @returns {Sequence<T>}
     */
    plus<T>(this: Sequence<T>, element: T): Sequence<T>;

    /**
     * Appends the given array to the end of the sequence and returns a new sequence.
     *
     * @param {Array<T>} other
     * @returns {Sequence<T>}
     */
    plus<T>(this: Sequence<T>, other: Array<T>): Sequence<T>;

    /**
     * Appends the given sequence to the end of the sequence and returns a new sequence.
     *
     * @param {Sequence<T>} other
     * @returns {Sequence<T>}
     */
    plus<T>(this: Sequence<T>, other: Sequence<T>): Sequence<T>;

    plus<T>(this: Sequence<T>, data: T | Sequence<T> | Array<T>): Sequence<T> {
        if (isSequence(data)) {
            return createSequence(new AppendIterator(this.iterator, data.iterator));
        } else if (data instanceof Array) {
            return createSequence(new AppendIterator(this.iterator, new IterableIterator(data)));
        } else {
            return createSequence(new AppendIterator(this.iterator, new IterableIterator([data])));
        }
    }

}