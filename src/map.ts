import SequenceIterator from "./SequenceIterator";
import Sequence, {createSequence} from "./Sequence";

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

export class Map {

    /**
     * Transforms each element into another value by applying the given `transform` function and returns a new sequence.
     *
     * @param {(T) => S} transform
     * @returns {Sequence<S>}
     */
    map<S, T>(this: Sequence<T>, transform: (element: T) => S): Sequence<S> {
        return createSequence(new MapIterator(transform, this.iterator));
    }

}