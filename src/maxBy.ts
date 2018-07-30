import Sequence from "./Sequence";

export class MaxBy {

    /**
     * Returns the maximum element by comparing the results of the given `selector` function
     * for each element of the sequence or `null` if the sequence is empty.
     *
     * @param {(value: T) => R} selector
     * @returns {T}
     */
    maxBy<T, R>(this: Sequence<T>, selector: (value: T) => R): T | null {
        let max: T | null = null;
        let maxSelected: R | null = null;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const value = selector(item.value);
            if (maxSelected == null || value > maxSelected) {
                maxSelected = value;
                max = item.value;
            }
        }
        return max;
    }

}