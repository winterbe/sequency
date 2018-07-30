import Sequence, {createSequence} from "./Sequence";

class MapIterator<S, T> implements Iterator<T> {
    constructor(private readonly transform: (item: S) => T,
                private readonly iterator: Iterator<S>) {
    }

    next(value?: any): IteratorResult<T> {
        const item = this.iterator.next();
        return item.done
            ? {done: true, value: undefined as any}
            : {done: false, value: this.transform(item.value)};
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