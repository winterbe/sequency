import Sequence, {createSequence} from "./Sequence";
import SequenceIterator from "./SequenceIterator";

class DropWhileIterator<T> implements SequenceIterator<T> {
    private nextItem: T | undefined;
    private done = false;
    private dropping = true;

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
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (!this.dropping) {
                this.nextItem = item;
                return;
            }
            const result = this.predicate(item);
            if (!result) {
                this.dropping = false;
                this.nextItem = item;
                return;
            }
        }
        this.done = true;
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