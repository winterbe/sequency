import Sequence from "./Sequence";

/**
 * Returns the sum of all numbers.
 *
 * @returns {number}
 */
function sum(this: Sequence<number>): number {
    let result = 0;
    while (this.iterator.hasNext()) {
        result += this.iterator.next();
    }
    return result;
}

export default sum;