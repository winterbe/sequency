import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted descending in natural order.
 *
 * @returns {Sequence<T>}
 */
function sortedDescending<T>(this: Sequence<T>): Sequence<T> {
    const result: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result.push(item);
    }
    result.sort((item1: T, item2: T) => {
        if (item1 < item2) {
            return 1;
        }
        if (item1 > item2) {
            return -1;
        }
        return 0;
    });
    return new Sequence(new IterableIterator(result));
}

export default sortedDescending;