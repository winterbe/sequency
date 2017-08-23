import Sequence from "./Sequence";

/**
 * Removes the given `data` and returns a new sequence. Data can either be a single element, an array of elements
 * or a sequence of elements.
 *
 * @param {Sequence<T> | Array<T> | T} data
 * @returns {Sequence<T>}
 */
function minus<T>(this: Sequence<T>, data: T | Sequence<T> | Array<T>): Sequence<T> {
    if (data instanceof Sequence) {
        const array: Array<T> = data.toArray();
        return this.filter(it => array.indexOf(it) < 0)
    } else if (data instanceof Array) {
        return this.filter(it => data.indexOf(it) < 0)
    } else {
        return this.filter(it => it !== data);
    }
}

export default minus;