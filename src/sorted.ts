import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";
import ComparatorFactory from "./ComparatorFactory";
import Comparator from "./Comparator";
import createComparatorFactory from "./createComparatorFactory";

/**
 * Returns a new sequence with all elements sorted ascending in natural order.
 *
 * @returns {Sequence<T>}
 */
function sorted<T>(this: Sequence<T>, composeComparator?: (factory: ComparatorFactory<T>) => Comparator<T>): Sequence<T> {
    const result: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result.push(item);
    }
    if (composeComparator == null) {
        result.sort();
    } else {
        const factory: ComparatorFactory<T> = createComparatorFactory<T>();
        const comparator = composeComparator(factory);
        result.sort(comparator);
    }
    return new Sequence(new IterableIterator(result));
}

export default sorted;