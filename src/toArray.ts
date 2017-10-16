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
        while (this.iterator.hasNext()) {
            result.push(this.iterator.next());
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