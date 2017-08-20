import Sequence from "./Sequence";
import SequenceIterator from "./SequenceIterator";

class DistinctIterator<T> implements SequenceIterator<T> {
    private items: Array<T> = [];
    private nextItem: T | undefined = undefined;
    private done: boolean = false;

    constructor(private readonly iterator: SequenceIterator<T>) {}

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

    processNext() {
        if (this.nextItem !== undefined || this.done) {
            return;
        }
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (this.items.indexOf(item) < 0) {
                this.nextItem = item;
                this.items.push(item);
                return;
            }
        }
        this.done = true;
    }
}

/**
 * Returns a new sequence which discards all duplicate elements.
 *
 * @returns {Sequence<T>}
 */
function distinct<T>(this: Sequence<T>): Sequence<T> {
    return new Sequence(new DistinctIterator(this.iterator));
}

export default distinct;