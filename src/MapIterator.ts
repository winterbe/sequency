import Iterator from "./Iterator";

export default class MapIterator<S, T> implements Iterator<T> {
    constructor(
        private readonly transform: (S) => T,
        private readonly iterator: Iterator<S>
    ) {}

    hasNext(): boolean {
        return this.iterator.hasNext();
    }

    next(): T {
        const item = this.iterator.next();
        return this.transform(item);
    }
}