import Sequence from "./Sequence";

export class Min {

    /**
     * Returns the minimum element of the sequence or `null` if sequence is empty.
     *
     * @returns {T}
     */
    min<T>(this: Sequence<T>): T | null {
        let result: T | null = null;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (result == null || item.value < result) {
                result = item.value;
            }
        }
        return result;
    }

}