import Sequence from "./Sequence";

export class Fold {

    /**
     * Accumulates all elements of the sequence into a single result by applying the given `operation` starting with
     * the `initial` value. The result of the last operation will be passed as accumulated value to the getNext invocation
     * of the operation until all elements of the sequence are processed.
     *
     * @param {R} initial
     * @param {(acc: R, element: T) => R} operation
     * @returns {R}
     */
    fold<T, R>(this: Sequence<T>, initial: R, operation: (acc: R, element: T) => R): R {
        let result = initial;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result = operation(result, item.value);
        }
        return result;
    }

}