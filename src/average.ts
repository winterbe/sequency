import Sequence from "./Sequence";

export class Average {

    /**
     * Returns the average of all numbers of the sequence or `NaN` if the sequence is empty.
     *
     * @returns {number}
     */
    average(this: Sequence<number>): number {
        let sum = 0;
        let count = 0;
        while (this.iterator.hasNext()) {
            sum += this.iterator.next();
            count++;
        }
        return count === 0
            ? Number.NaN
            : sum / count;
    }

}