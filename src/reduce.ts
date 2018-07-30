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
        const first = this.iterator.next();
        if (first.done) {
            throw new Error("Cannot reduce empty sequence");
        }
        let result: S = first.value;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result = operation(result, item.value);
        }
        return result;
    }

}