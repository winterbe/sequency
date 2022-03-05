import Sequence, {createSequence} from "./Sequence";

class DistinctByIterator<T, K> implements Iterator<T> {
    private set: Set<K> = new Set();

    constructor(private readonly iterator: Iterator<T>,
                private readonly selector: (item: T) => K) {
    }

    next(value?: any): IteratorResult<T> {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const key = this.selector(item.value);
            const sizeBeforeAdd = this.set.size;
            this.set.add(key);
            if (this.set.size > sizeBeforeAdd) {
                return {done: false, value: item.value};
            }
        }
        this.set.clear();
        return {done: true, value: undefined as any};
    }
}

export class DistinctBy {

    /**
     * Returns a new sequence which discards all elements with duplicate items determined
     * by the given `selector`.
     *
     * @param {(item: T) => K} selector
     * @returns {Sequence<T>}
     */
    distinctBy<T, K>(this: Sequence<T>, selector: (item: T) => K): Sequence<T> {
        return createSequence(new DistinctByIterator(this.iterator, selector));
    }

}
