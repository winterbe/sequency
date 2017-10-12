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
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (i === index) {
                return item;
            }
            i++;
        }
        return null;
    }

}