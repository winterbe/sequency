import Sequence, {createSequence} from "./Sequence";

class TakeWhileIterator<T> implements Iterator<T> {
    constructor(private readonly iterator: Iterator<T>,
                private readonly predicate: (item: T) => boolean) {
    }

    next(value?: any): IteratorResult<T> {
        const item = this.iterator.next();
        if (!item.done) {
            const result = this.predicate(item.value);
            if (result) {
                return {done: false, value: item.value};
            }
        }
        return {done: true, value: undefined as any};
    }
}

export class TakeWhile {

    /**
     * Takes all elements of the sequence as long as the given `predicate` evaluates to true.
     *
     * @param {(item: T) => boolean} predicate
     * @returns {Sequence<T>}
     */
    takeWhile<T>(this: Sequence<T>, predicate: (item: T) => boolean): Sequence<T> {
        return createSequence(new TakeWhileIterator(this.iterator, predicate));
    }

}