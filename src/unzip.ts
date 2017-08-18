import Sequence from "./Sequence";

function unzip<T, S>(this: Sequence<[T, S]>): [Array<T>, Array<S>] {
    const array1: Array<T> = [];
    const array2: Array<S> = [];
    while (this.iterator.hasNext()) {
        const [first, second] = this.iterator.next();
        array1.push(first);
        array2.push(second);
    }
    return [array1, array2];
}

export default unzip;