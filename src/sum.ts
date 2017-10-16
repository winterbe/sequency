import Sequence from "./Sequence";

export class Sum {

    /**
     * Returns the sum of all numbers.
     *
     * @returns {number}
     */
    sum(this: Sequence<number>): number {
        let result = 0;
        while (this.iterator.hasNext()) {
            result += this.iterator.next();
        }
        return result;
    }

}