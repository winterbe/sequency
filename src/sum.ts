import Sequence from "./Sequence";

export class Sum {

    /**
     * Returns the sum of all numbers.
     *
     * @returns {number}
     */
    sum(this: Sequence<number>): number {
        let result = 0;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result += item.value;
        }
        return result;
    }

}