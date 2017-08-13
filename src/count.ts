import Sequence from "./Sequence";

function count<T>(this: Sequence<T>, predicate?: (T) => boolean): number {
    let num = 0;
    if (predicate == null) {
        while (this.iterator.hasNext()) {
            this.iterator.next();
            num++;
        }
    } else {
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (predicate(item)) {
                num++;
            }
        }
    }
    return num;
}

export default count;