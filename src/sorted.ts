import Sequence from "./Sequence";
import {IterableIterator} from "./SequenceIterator";

/**
 * Returns a new sequence with all elements sorted ascending in natural order.
 *
 * @returns {Sequence<T>}
 */
function sorted<T>(this: Sequence<T>): Sequence<T> {
    const result: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result.push(item);
    }
    result.sort();
    return new Sequence(new IterableIterator(result));
}

export default sorted;