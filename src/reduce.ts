import Sequence from "./Sequence";

export class Reduce {

    /**
     * Reduces the whole sequence to a single value by invoking `operation` with each element
     * from left to right. For every invocation of the operation `acc` is the result of the last
     * invocation. For the first invocation of the operation `acc` is the first element of the
     * sequence.
     *
     * @param {(acc: S, value: T) => S} operation
     * @returns {S}
     */
    reduce<S, T extends S>(this: Sequence<T>, operation: (acc: S, value: T) => S): S {
        if (!this.iterator.hasNext()) {
            throw new Error("Cannot reduce empty sequence");
        }
        let result: S = this.iterator.next();
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            result = operation(result, item);
        }
        return result;
    }

}