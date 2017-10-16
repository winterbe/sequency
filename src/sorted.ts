import Sequence, {createSequence} from "./Sequence";
import {IterableIterator} from "./SequenceIterator";
import ComparatorFactory from "./ComparatorFactory";
import Comparator from "./Comparator";
import createComparatorFactory from "./createComparatorFactory";

export class Sorted {

    /**
     * Returns a new sequence with all elements sorted by the comparator specified by the given `composeComparator` function
     * or in natural order if no arguments are given.
     *
     * @returns {Sequence<T>}
     */
    sorted<T>(this: Sequence<T>, composeComparator?: (factory: ComparatorFactory<T>) => Comparator<T>): Sequence<T> {
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
        return createSequence(new IterableIterator(result));
    }

}