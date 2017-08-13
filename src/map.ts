import SequenceIterator from "./SequenceIterator";
import Sequence from "./Sequence";

class MapIterator<S, T> implements SequenceIterator<T> {
    constructor(
        private readonly transform: (S) => T,
        private readonly iterator: SequenceIterator<S>
    ) {}

    hasNext(): boolean {
        return this.iterator.hasNext();
    }

    next(): T {
        const item = this.iterator.next();
        return this.transform(item);
    }
}

function map<S, T>(this: Sequence<T>, transform: (T) => S): Sequence<S> {
    return new Sequence(new MapIterator(transform, this.iterator));
}

export default map;