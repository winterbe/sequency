import Sequence, {createSequence} from "./Sequence";
import SequenceIterator from "./SequenceIterator";

class TakeWhileIterator<T> implements SequenceIterator<T> {
    private nextItem: T | undefined;
    private done = false;

    constructor(
        private readonly iterator: SequenceIterator<T>,
        private readonly predicate: (item: T) => boolean
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
        if (this.iterator.hasNext()) {
            const item = this.iterator.next();
            const result = this.predicate(item);
            if (result) {
                this.nextItem = item;
                return;
            }
        }
        this.done = true;
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