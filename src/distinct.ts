import Sequence, {createSequence} from "./Sequence";

class DistinctIterator<T> implements Iterator<T> {
    private set: Set<T> = new Set();

    constructor(private readonly iterator: Iterator<T>) {
    }

    next(value?: any): IteratorResult<T> {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const sizeBeforeAdd = this.set.size;
            this.set.add(item.value);
            if (this.set.size > sizeBeforeAdd) {
                return {done: false, value: item.value};
            }
        }
        this.set.clear();
        return {done: true, value: undefined as any};
    }
}

export class Distinct {

    /**
     * Returns a new sequence which discards all duplicate elements.
     *
     * @returns {Sequence<T>}
     */
    distinct<T>(this: Sequence<T>): Sequence<T> {
        return createSequence(new DistinctIterator(this.iterator));
    }

}
