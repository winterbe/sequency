import Sequence from "./Sequence";

function toArray<T>(this: Sequence<T>, array?: Array<T>): Array<T> {
    const result: Array<T> = array || [];
    while (this.iterator.hasNext()) {
        result.push(this.iterator.next());
    }
    return result;
}

export default toArray;