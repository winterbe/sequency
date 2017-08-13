import Sequence from "./Sequence";

function elementAt<T>(this: Sequence<T>, index: number): T {
    let i = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (i === index) {
            return item;
        }
    }
    throw new Error("Index out of bounds: " + index);
}

export default elementAt;