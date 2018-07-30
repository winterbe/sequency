import Sequence, {createSequence, isSequence} from "./Sequence";

class AppendIterator<T> implements Iterator<T> {
    constructor(private readonly first: Iterator<T>,
                private readonly second: Iterator<T>) {
    }

    next(value?: any): IteratorResult<T> {
        const item1 = this.first.next();
        if (!item1.done) {
            return {done: false, value: item1.value};
        }
        const item2 = this.second.next();
        if (!item2.done) {
            return {done: false, value: item2.value};
        }
        return {done: true, value: undefined as any};
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
            const iterator = data[Symbol.iterator]();
            return createSequence(new AppendIterator(this.iterator, iterator));
        } else {
            const iterator = [data][Symbol.iterator]();
            return createSequence(new AppendIterator(this.iterator, iterator));
        }
    }

}