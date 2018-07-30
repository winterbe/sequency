import Sequence, {createSequence} from "./Sequence";

class DistinctByIterator<T, K> implements Iterator<T> {
    private keys: Array<K> = [];

    constructor(private readonly iterator: Iterator<T>,
                private readonly selector: (item: T) => K) {
    }

    next(value?: any): IteratorResult<T> {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const key = this.selector(item.value);
            if (this.keys.indexOf(key) < 0) {
                this.keys.push(key);
                return {done: false, value: item.value};
            }
        }
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