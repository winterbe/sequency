import Sequence from "./Sequence";

function indexOf<T>(this: Sequence<T>, element: T): number {
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (item === element) {
            return index;
        }
        index++;
    }
    return -1;
}

export default indexOf;