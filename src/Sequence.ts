import Iterator from "./Iterator";
import MapIterator from "./MapIterator";
import FilterIterator from "./FilterIterator";
import FlatMapIterator from "./FlatMapIterator";

export default class Sequence<T> {
    private readonly _iterator: Iterator<T>;

    constructor(iterator: Iterator<T>) {
        this._iterator = iterator;
    }

    get iterator(): Iterator<T> {
        return this._iterator;
    }

    filter(predicate: (T) => boolean): Sequence<T> {
        return new Sequence(new FilterIterator(predicate, this.iterator));
    }

    map<S>(transform: (T) => S): Sequence<S> {
        return new Sequence(new MapIterator(transform, this.iterator));
    }

    flatMap<S>(transform: (T) => Sequence<S>): Sequence<S> {
        return new Sequence(new FlatMapIterator(transform, this.iterator));
    }

    toArray(): Array<T> {
        const array: Array<T> = [];
        while (this.iterator.hasNext()) {
            array.push(this.iterator.next());
        }
        return array;
    }

    first(predicate?: (T) => boolean): T {
        const result = this.firstOrNull(predicate);
        if (result == null) {
            throw new Error("No such element");
        }
        return result;
    }

    firstOrNull(predicate?: (T) => boolean): T | null {
        if (predicate != null) {
            return this.filter(predicate).firstOrNull();
        }
        return this.iterator.hasNext()
            ? this.iterator.next()
            : null;
    }

    last(predicate?: (T) => boolean): T {
        const result = this.lastOrNull(predicate);
        if (result == null) {
            throw new Error("No such element");
        }
        return result;
    }

    lastOrNull(predicate?: (T) => boolean): T | null {
        if (predicate != null) {
            return this.filter(predicate).lastOrNull();
        }
        let item: T | null = null;
        while (this.iterator.hasNext()) {
            item = this.iterator.next();
        }
        return item;
    }

    all(predicate: (T) => boolean): boolean {
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (!predicate(item)) {
                return false;
            }
        }
        return true;
    }

    any(predicate?: (T) => boolean): boolean {
        if (predicate == null) {
            return this.iterator.hasNext();
        }
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (predicate(item)) {
                return true;
            }
        }
        return false;
    }

    none(predicate?: (T) => boolean): boolean {
        if (predicate == null) {
            return !this.iterator.hasNext();
        }
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (predicate(item)) {
                return false;
            }
        }
        return true;
    }
}