import Sequence from "./Sequence";

export class SumBy {

    /**
     * Returns the sum of all numbers specified by the given `selector` function.
     *
     * @param {(value: T) => number} selector
     * @returns {number}
     */
    sumBy<T>(this: Sequence<T>, selector: (value: T) => number): number {
        let result = 0;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result += selector(item.value);
        }
        return result;
    }

}