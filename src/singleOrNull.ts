import Sequence from "./Sequence";

function singleOrNull<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T | null {
    if (predicate != null) {
        return this.filter(predicate).singleOrNull();
    }
    if (!this.iterator.hasNext()) {
        return null;
    }
    const item = this.iterator.next();
    if (this.iterator.hasNext()) {
        return null;
    }
    return item;
}

export default singleOrNull;