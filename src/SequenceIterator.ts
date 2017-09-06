/**
 * The iterator used by `Sequence` to iterate over the underlying data.
 */
interface SequenceIterator<T> {
    hasNext(): boolean;
    next(): T;
}
export default SequenceIterator;

export class IterableIterator<T> implements SequenceIterator<T> {
    private readonly iterator: Iterator<T>;
    private done = false;
    private nextItem: T | undefined;

    constructor(iterable: Iterable<T>) {
        this.iterator = iterable[Symbol.iterator]();
    }

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
        const {done, value} = this.iterator.next();
        if (done) {
            this.done = done;
            this.nextItem = undefined;
        } else {
            this.nextItem = value;
        }
    }
}