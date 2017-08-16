import Sequence from "./Sequence";

function foldIndexed<T, R>(this: Sequence<T>, initial: R, operation: (index: number, acc: R, element: T) => R): R {
    let result = initial;
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(index, result, item);
        index++;
    }
    return result;
}

export default foldIndexed;