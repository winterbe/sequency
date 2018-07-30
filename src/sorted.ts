import Sequence, {createSequence} from "./Sequence";
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
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result.push(item.value);
        }
        if (composeComparator == null) {
            result.sort();
        } else {
            const factory: ComparatorFactory<T> = createComparatorFactory<T>();
            const comparator = composeComparator(factory);
            result.sort(comparator);
        }
        const iterator = result[Symbol.iterator]();
        return createSequence(iterator);
    }

}