import Sequence, {createSequence} from "./Sequence";

class DistinctIterator<T> implements Iterator<T> {
    private items: Array<T> = [];

    constructor(private readonly iterator: Iterator<T>) {
    }

    next(value?: any): IteratorResult<T> {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (this.items.indexOf(item.value) < 0) {
                this.items.push(item.value);
                return {done: false, value: item.value};
            }
        }
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