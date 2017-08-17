import Sequence from "./Sequence";
import SequenceIterator from "./SequenceIterator";

class ZipIterator<T, S> implements SequenceIterator<{ first: T, second: S }> {
    constructor(
        private readonly iterator1: SequenceIterator<T>,
        private readonly iterator2: SequenceIterator<S>
    ) {}

    hasNext(): boolean {
        return this.iterator1.hasNext() && this.iterator2.hasNext();
    }

    next(): { first: T; second: S } {
        const item1 = this.iterator1.next();
        const item2 = this.iterator2.next();
        return {first: item1, second: item2};
    }

}

function zip<T, S>(this: Sequence<T>, other: Sequence<S>): Sequence<{ first: T, second: S }> {
    return new Sequence(new ZipIterator(this.iterator, other.iterator));
}

export default zip;