import Sequence from "./Sequence";

export class ToArray {

    /**
     * Returns all elements of the sequence as array. If an `array` is passed
     * the elements are appended to the end of the array.
     *
     * @param {Array<T>} array
     * @returns {Array<T>}
     */
    toArray<T>(this: Sequence<T>, array?: Array<T>): Array<T> {
        const result: Array<T> = array || [];
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result.push(item.value);
        }
        return result;
    }

    /**
     * Returns all elements of the sequence as array. If an `array` is passed
     * the elements are appended to the end of the array.
     *
     * @param {Array<T>} array
     * @returns {Array<T>}
     */
    toList<T>(this: Sequence<T>, array?: Array<T>): Array<T> {
        return this.toArray(array);
    }

}