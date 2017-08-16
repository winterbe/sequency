import Sequence from "./Sequence";

function fold<T, R>(this: Sequence<T>, initial: R, operation: (acc: R, element: T) => R): R {
    let result = initial;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(result, item);
    }
    return result;
}

export default fold;