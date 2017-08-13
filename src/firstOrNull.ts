import Sequence from "./Sequence";

function firstOrNull<T>(this: Sequence<T>, predicate?: (T) => boolean): T | null {
    if (predicate != null) {
        return this.filter(predicate).firstOrNull();
    }
    return this.iterator.hasNext()
        ? this.iterator.next()
        : null;
}

export default firstOrNull;