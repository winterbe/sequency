import Sequence from "./Sequence";

export class ElementAt {

    /**
     * Returns the element at position `index` (zero-based) or throws an error if `index`
     * is out of bounds.
     *
     * @param {number} index
     * @returns {T}
     */
    elementAt<T>(this: Sequence<T>, index: number): T {
        let i = 0;
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (i === index) {
                return item;
            }
            i++;
        }
        throw new Error("Index out of bounds: " + index);
    }

}