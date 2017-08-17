import Sequence from "./Sequence";
import ArrayIterator from "./ArrayIterator";

function sorted<T>(this: Sequence<T>): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort();
    return new Sequence(new ArrayIterator(sorted));
}

export default sorted;