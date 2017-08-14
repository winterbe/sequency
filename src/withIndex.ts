import Sequence from "./Sequence";
import IndexedValue from "./IndexedValue";
import SequenceIterator from "./SequenceIterator";

class IndexIterator<T> implements SequenceIterator<IndexedValue<T>> {
    private index = -1;

    constructor(private readonly iterator: SequenceIterator<T>) {}

    hasNext(): boolean {
        return this.iterator.hasNext();
    }

    next(): IndexedValue<T> {
        const value = this.iterator.next();
        this.index++;
        return {index: this.index, value};
    }
}

function withIndex<T>(this: Sequence<T>): Sequence<IndexedValue<T>> {
    return new Sequence(new IndexIterator(this.iterator));
}

export default withIndex;