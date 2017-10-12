import Sequence from "./Sequence";

export class Max {

    /**
     * Returns the maximum element of the sequence or `null` if sequence is empty.
     *
     * @returns {T}
     */
    max<T>(this: Sequence<T>): T | null {
        let result: T | null = null;
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (result == null || item > result) {
                result = item;
            }
        }
        return result;
    }

}