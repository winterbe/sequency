import Sequence, {createSequence} from "./Sequence";
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

export class WithIndex {

    /**
     * Returns a new sequence consisting of indexed values for all original elements.
     *
     * @returns {Sequence<IndexedValue<T>>}
     */
    withIndex<T>(this: Sequence<T>): Sequence<IndexedValue<T>> {
        return createSequence(new IndexIterator(this.iterator));
    }

}