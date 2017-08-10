import Iterator from "./Iterator";
import Sequence from "./Sequence";

export default class FlatMapIterator<S, T> implements Iterator<T> {
    private current: Iterator<T> | undefined;

    constructor(
        private readonly transform: (S) => Sequence<T>,
        private readonly iterator: Iterator<S>
    ) {}

    next(): T {
        this.processNext();
        return this.current!.next();
    }

    hasNext(): boolean {
        this.processNext();
        return this.current != null;
    }

    private processNext() {
        if (this.current != null) {
            if (this.current.hasNext()) {
                return;
            } else {
                this.current = undefined;
            }
        }
        while (this.current == null && this.iterator.hasNext()) {
            const element = this.iterator.next();
            const sequence = this.transform(element);
            if (sequence.iterator.hasNext()) {
                this.current = sequence.iterator;
            }
        }
    }
}