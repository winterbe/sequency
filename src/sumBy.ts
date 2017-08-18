import Sequence from "./Sequence";

function sumBy<T>(this: Sequence<T>, selector: (value: T) => number): number {
    let result = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result += selector(item);
    }
    return result;
}

export default sumBy;