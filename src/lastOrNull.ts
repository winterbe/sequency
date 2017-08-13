import Sequence from "./Sequence";

function lastOrNull<T>(this: Sequence<T>, predicate?: (T) => boolean): T | null {
    if (predicate != null) {
        return this.filter(predicate).lastOrNull();
    }
    let item: T | null = null;
    while (this.iterator.hasNext()) {
        item = this.iterator.next();
    }
    return item;
}

export default lastOrNull;