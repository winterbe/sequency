import Sequence from "./Sequence";
import ArrayIterator from "./ArrayIterator";

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
    return new Sequence(new ArrayIterator(sorted));
}

export default sortedDescending;