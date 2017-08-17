import Sequence from "./Sequence";

function toSet<T>(this: Sequence<T>, set?: Set<T>): Set<T> {
    const result = set || new Set();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result.add(item);
    }
    return result;
}

export default toSet;