import Sequence from "./Sequence";

/**
 * Reduces the whole sequence to a single value by invoking `operation` with each element
 * from left to right. For every invocation of the operation `acc` is the result of the last
 * invocation. For the first invocation of the operation `acc` is the first element of the
 * sequence. In addition the `index` of the current element is also passed to the operation.
 *
 * @param {(index: number, acc: S, element: T) => S} operation
 * @returns {S}
 */
function reduceIndexed<S, T extends S>(this: Sequence<T>, operation: (index: number, acc: S, element: T) => S): S {
    if (!this.iterator.hasNext()) {
        throw new Error("Cannot reduce empty sequence");
    }
    let index = 1;
    let result: S = this.iterator.next();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(index, result, item);
        index++;
    }
    return result;
}

export default reduceIndexed;