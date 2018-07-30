import Sequence from "./Sequence";

export class ElementAtOrElse {

    /**
     * Returns the element at position `index` (zero-based). If `index` is out of bounds returns
     * the result of the given `defaultValue` function.
     *
     * @param {number} index
     * @param defaultValue
     * @returns {T}
     */
    elementAtOrElse<T>(this: Sequence<T>, index: number, defaultValue: (index: number) => T): T {
        let i = 0;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (i === index) {
                return item.value;
            }
            i++;
        }
        return defaultValue(index);
    }

}