import Sequence from "./Sequence";

/**
 * Returns a new sequence consisting of all elements that match the given `predicate`.
 *
 * @param {(index: number, value: T) => boolean} predicate
 * @returns {Sequence<T>}
 */
function filterIndexed<T>(this: Sequence<T>, predicate: (index: number, value: T) => boolean): Sequence<T> {
    return this.withIndex()
        .filter(it => predicate(it.index, it.value))
        .map(it => it.value);
}

export default filterIndexed;