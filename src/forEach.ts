import Sequence from "./Sequence";

function forEach<T>(this: Sequence<T>, action: (T) => void) {
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        action(item);
    }
}

export default forEach;