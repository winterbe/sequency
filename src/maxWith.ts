import Sequence from "./Sequence";

export class MaxWith {

    /**
     * Returns the maximum element of the sequence by evaluating the given `compare`
     * function or `null` if sequence is empty.
     *
     * @returns {T}
     */
    maxWith<T>(this: Sequence<T>, compare: (a: T, b: T) => number): T | null {
        let max: T | null = null;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (max == null || compare(item.value, max) > 0) {
                max = item.value;
            }
        }
        return max;
    }

}