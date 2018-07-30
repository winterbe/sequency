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
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const value = selector(item.value);
            if (minSelected == null || value < minSelected) {
                minSelected = value;
                min = item.value;
            }
        }
        return min;
    }

}