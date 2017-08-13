import Sequence from "./Sequence";

function contains<T>(this: Sequence<T>, element: T): boolean {
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (element === item) {
            return true;
        }
    }
    return false;
}

export default contains;