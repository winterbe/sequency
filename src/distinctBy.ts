import Sequence from "./Sequence";
import SequenceIterator from "./SequenceIterator";

class DistinctByIterator<T, K> implements SequenceIterator<T> {
    private keys: Array<K> = [];
    private nextItem: T | undefined = undefined;
    private done: boolean = false;

    constructor(
        private readonly iterator: SequenceIterator<T>,
        private readonly selector: (item: T) => K
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

    processNext() {
        if (this.nextItem !== undefined || this.done) {
            return;
        }
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            const key = this.selector(item);
            if (this.keys.indexOf(key) < 0) {
                this.nextItem = item;
                this.keys.push(key);
                return;
            }
        }
        this.done = true;
    }
}

export default function distinctBy<T, K>(this: Sequence<T>, selector: (item: T) => K): Sequence<T> {
    return new Sequence(new DistinctByIterator(this.iterator, selector));
}
