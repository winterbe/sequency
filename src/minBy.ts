import Sequence from "./Sequence";

export class MinBy {

    /**
     * Returns the minimum element by comparing the results of the given `selector` function
     * for each element of the sequence or `null` if the sequence is empty.
     *
     * @param {(value: T) => R} selector
     * @returns {T}
     */
    minBy<T, R>(this: Sequence<T>, selector: (value: T) => R): T | null {
        let min: T | null = null;
        let minSelected: R | null = null;
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            const value = selector(item);
            if (minSelected == null || value < minSelected) {
                minSelected = value;
                min = item;
            }
        }
        return min;
    }

}