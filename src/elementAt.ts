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
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (i === index) {
                return item.value;
            }
            i++;
        }
        throw new Error("Index out of bounds: " + index);
    }

}