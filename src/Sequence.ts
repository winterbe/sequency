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

    onEach(action: (T) => void): Sequence<T> {
        return this.map(it => {
            action(it);
            return it;
        });
    }

    forEach(action: (T) => void) {
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            action(item);
        }
    }

    toArray(array?: Array<T>): Array<T> {
        const result: Array<T> = array || [];
        while (this.iterator.hasNext()) {
            result.push(this.iterator.next());
        }
        return result;
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