import Sequence, {createSequence} from "./Sequence";

class DropWhileIterator<T> implements Iterator<T> {
    private dropping = true;

    constructor(private readonly iterator: Iterator<T>,
                private readonly predicate: (item: T) => boolean) {
    }

    next(value?: any): IteratorResult<T> {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (!this.dropping) {
                return {done: false, value: item.value};
            }
            const result = this.predicate(item.value);
            if (!result) {
                this.dropping = false;
                return {done: false, value: item.value};
            }
        }
        return {done: true, value: undefined as any};
    }
}

export class DropWhile {

    /**
     * Drops all elements of the sequence as long as the given `predicate` evaluates to true.
     *
     * @param {(item: T) => boolean} predicate
     * @returns {Sequence<T>}
     */
    dropWhile<T>(this: Sequence<T>, predicate: (item: T) => boolean): Sequence<T> {
        return createSequence(new DropWhileIterator(this.iterator, predicate));
    }

}