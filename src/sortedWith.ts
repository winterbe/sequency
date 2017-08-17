import Sequence from "./Sequence";
import ArrayIterator from "./ArrayIterator";

function sortedWith<T>(this: Sequence<T>, compare: (a: T, b: T) => number): Sequence<T> {
    const sorted: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        sorted.push(item);
    }
    sorted.sort(compare);
    return new Sequence(new ArrayIterator(sorted));
}

export default sortedWith;