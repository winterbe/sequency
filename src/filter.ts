import SequenceIterator from "./SequenceIterator";
import Sequence from "./Sequence";

class FilterIterator<T> implements SequenceIterator<T> {
    private nextItem: T | undefined;
    private done = false;

    constructor(
        private readonly predicate: (T) => boolean,
        private readonly iterator: SequenceIterator<T>
    ) {}

    hasNext(): boolean {
        this.processNext();
        return !this.done;
    }

    next(): T {
        this.processNext();
        const result = this.nextItem!;
        this.nextItem = undefined;
        return result;
    }

    private processNext() {
        if (this.done || this.nextItem !== undefined) {
            return;
        }
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (this.predicate(item)) {
                this.nextItem = item;
                return;
            }
        }
        this.done = true;
    }
}

/**
 * Returns a new sequence consisting of all elements that match the given `predicate`.
 *
 * @param {(T) => boolean} predicate
 * @returns {Sequence<T>}
 */
function filter<T>(this: Sequence<T>, predicate: (T) => boolean): Sequence<T> {
    return new Sequence(new FilterIterator(predicate, this.iterator));
}

export default filter;