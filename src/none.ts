import Sequence from "./Sequence";

function none<T>(this: Sequence<T>, predicate?: (T) => boolean): boolean {
    if (predicate == null) {
        return !this.iterator.hasNext();
    }
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            return false;
        }
    }
    return true;
}

export default none;