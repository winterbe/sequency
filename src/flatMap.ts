import SequenceIterator from "./SequenceIterator";
import Sequence from "./Sequence";

class FlatMapIterator<S, T> implements SequenceIterator<T> {
    private current: SequenceIterator<T> | undefined;

    constructor(
        private readonly transform: (S) => Sequence<T>,
        private readonly iterator: SequenceIterator<S>
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

/**
 * Transforms each element into a sequence of items and returns a flat single sequence of all those items.
 *
 * @param {(value: S) => Sequence<T>} transform
 * @returns {Sequence<T>}
 */
function flatMap<S, T>(this: Sequence<S>, transform: (value: S) => Sequence<T>): Sequence<T> {
    return new Sequence(new FlatMapIterator(transform, this.iterator));
}

export default flatMap;