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
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            result += selector(item);
        }
        return result;
    }

}