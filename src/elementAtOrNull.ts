import Sequence from "./Sequence";

function elementAtOrNull<T>(this: Sequence<T>, index: number): T | null {
    let i = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (i === index) {
            return item;
        }
    }
    return null;
}

export default elementAtOrNull;