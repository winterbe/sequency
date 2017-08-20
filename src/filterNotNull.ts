import Sequence from "./Sequence";

/**
 * Returns a new sequence consisting of all non-null elements.
 *
 * @returns {Sequence<T>}
 */
function filterNotNull<T>(this: Sequence<T>): Sequence<T> {
    return this.filter(it => it !== null);
}

export default filterNotNull;