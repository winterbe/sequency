import Sequence from "./Sequence";

function elementAtOrElse<T>(this: Sequence<T>, index: number, defaultValue: (number) => T): T {
    let i = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (i === index) {
            return item;
        }
        i++;
    }
    return defaultValue(index);
}

export default elementAtOrElse;