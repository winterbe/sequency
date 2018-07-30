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
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            sum += item.value;
            count++;
        }
        return count === 0
            ? Number.NaN
            : sum / count;
    }

}