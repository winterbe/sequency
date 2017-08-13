import Sequence from "./Sequence";

function all<T>(this: Sequence<T>, predicate: (T) => boolean): boolean {
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}

export default all;