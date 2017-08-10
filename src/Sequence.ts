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
}