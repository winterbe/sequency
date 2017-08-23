import Sequence from "./Sequence";
import SequenceIterator, {IterableIterator} from "./SequenceIterator";

class AppendIterator<T> implements SequenceIterator<T> {
    constructor(
        private readonly first: SequenceIterator<T>,
        private readonly second: SequenceIterator<T>
    ) {}

    hasNext(): boolean {
        return this.first.hasNext() || this.second.hasNext();
    }

    next(): T {
        return this.first.hasNext()
            ? this.first.next()
            : this.second.next();
    }

}

/**
 * Appends the given `data` to the end of the sequence and returns a new sequence. Data can either be a single element,
 * an array of elements or a sequence of elements.
 *
 * @param {Sequence<T> | Array<T> | T} data
 * @returns {Sequence<T>}
 */
function plus<T>(this: Sequence<T>, data: T | Sequence<T> | Array<T>): Sequence<T> {
    if (data instanceof Sequence) {
        return new Sequence(new AppendIterator(this.iterator, data.iterator));
    } else if (data instanceof Array) {
        return new Sequence(new AppendIterator(this.iterator, new IterableIterator(data)));
    } else {
        return new Sequence(new AppendIterator(this.iterator, new IterableIterator([data])));
    }
}

export default plus;