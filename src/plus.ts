import Sequence from "./Sequence";
import SequenceIterator from "./SequenceIterator";
import ArrayIterator from "./ArrayIterator";

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

function plus<T>(this: Sequence<T>, data: T | Sequence<T> | Array<T>): Sequence<T> {
    if (data instanceof Sequence) {
        return new Sequence(new AppendIterator(this.iterator, data.iterator));
    } else if (data instanceof Array) {
        return new Sequence(new AppendIterator(this.iterator, new ArrayIterator(data)));
    } else {
        return new Sequence(new AppendIterator(this.iterator, new ArrayIterator([data])));
    }
}

export default plus;