import Sequence from "./Sequence";

/**
 * Accumulates all elements of the sequence into a single result by applying the given `operation` starting with
 * the `initial` value. The result of the last operation will be passed as accumulated value to the next invocation
 * of the operation until all elements of the sequence are processed.
 *
 * @param {R} initial
 * @param {(acc: R, element: T) => R} operation
 * @returns {R}
 */
function fold<T, R>(this: Sequence<T>, initial: R, operation: (acc: R, element: T) => R): R {
    let result = initial;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(result, item);
    }
    return result;
}

export default fold;