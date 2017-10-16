import Sequence from "./Sequence";

export class FoldIndexed {

    /**
     * Accumulates all elements of the sequence into a single result by applying the given `operation` starting with
     * the `initial` value. The result of the last operation will be passed as accumulated value to the next invocation
     * of the operation as well as the `index` of the current element (zero-based) until all elements of the sequence
     * are processed.
     *
     * @param {R} initial
     * @param {(index: number, acc: R, element: T) => R} operation
     * @returns {R}
     */
    foldIndexed<T, R>(this: Sequence<T>, initial: R, operation: (index: number, acc: R, element: T) => R): R {
        let result = initial;
        let index = 0;
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            result = operation(index, result, item);
            index++;
        }
        return result;
    }

}