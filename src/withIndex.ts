import Sequence, {createSequence} from "./Sequence";
import IndexedValue from "./IndexedValue";

class IndexIterator<T> implements Iterator<IndexedValue<T>> {
    private index = -1;

    constructor(private readonly iterator: Iterator<T>) {
    }

    next(value?: any): IteratorResult<IndexedValue<T>> {
        const item = this.iterator.next();
        if (item.done) {
            return {done: true, value: undefined as any};
        }
        this.index++;
        return {
            done: false,
            value: {
                index: this.index,
                value: item.value
            }
        };
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