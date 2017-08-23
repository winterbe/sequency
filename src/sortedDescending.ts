import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted descending in natural order.
 *
 * @returns {Sequence<T>}
 */
function sortedDescending<T>(this: Sequence<T>): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort((item1: T, item2: T) => {
        if (item1 < item2) {
            return 1;
        }
        if (item1 > item2) {
            return -1
        }
        return 0;
    });
    return new Sequence(new IterableIterator(sorted));
}

export default sortedDescending;