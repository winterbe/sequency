import Sequence from "./Sequence";

function indexOfLast<T>(this: Sequence<T>, predicate: (value: T) => boolean): number {
    let index = 0;
    let result = -1;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            result = index;
        }
        index++;
    }
    return result;
}

export default indexOfLast;