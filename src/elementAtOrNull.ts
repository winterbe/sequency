import Sequence from "./Sequence";

export class ElementAtOrNull {

    /**
     * Returns the element at position `index` (zero-based) or `null` if `index`
     * is out of bounds.
     *
     * @param {number} index
     * @returns {T}
     */
    elementAtOrNull<T>(this: Sequence<T>, index: number): T | null {
        let i = 0;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (i === index) {
                return item.value;
            }
            i++;
        }
        return null;
    }

}