import Sequence from "./Sequence";

function indexOfFirst<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            return index;
        }
        index++;
    }
    return -1;
}

export default indexOfFirst;