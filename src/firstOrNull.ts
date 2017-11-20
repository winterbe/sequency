import Sequence from "./Sequence";

export class FirstOrNull {

    /**
     * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise returns `null`.
     *
     * @param {(T) => boolean} predicate
     * @returns {T}
     */
    firstOrNull<T>(this: Sequence<T>, predicate?: (item: T) => boolean): T | null {
        if (predicate != null) {
            return this.filter(predicate).firstOrNull();
        }
        return this.iterator.hasNext()
            ? this.iterator.next()
            : null;
    }

    /**
     * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise returns `null`.
     *
     * @param {(T) => boolean} predicate
     * @returns {T}
     */
    find<T>(this: Sequence<T>, predicate?: (item: T) => boolean): T | null {
        return this.firstOrNull(predicate);
    }

}