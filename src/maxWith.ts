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
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (max == null || compare(item, max) > 0) {
                max = item;
            }
        }
        return max;
    }

}