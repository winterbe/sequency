import Sequence from "./Sequence";

export class ReduceIndexed {

    /**
     * Reduces the whole sequence to a single value by invoking `operation` with each element
     * from left to right. For every invocation of the operation `acc` is the result of the last
     * invocation. For the first invocation of the operation `acc` is the first element of the
     * sequence. In addition the `index` of the current element is also passed to the operation.
     *
     * @param {(index: number, acc: S, element: T) => S} operation
     * @returns {S}
     */
    reduceIndexed<S, T extends S>(this: Sequence<T>, operation: (index: number, acc: S, element: T) => S): S {
        const first = this.iterator.next();
        if (first.done) {
            throw new Error("Cannot reduce empty sequence");
        }
        let index = 1;
        let result: S = first.value;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result = operation(index, result, item.value);
            index++;
        }
        return result;
    }

}