import Sequence from "./Sequence";

export class LastOrNull {

    /**
     * Returns the last element of the sequence or the last element matching `predicate` if present, otherwise returns `null`.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {T}
     */
    lastOrNull<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T | null {
        if (predicate != null) {
            return this.filter(predicate).lastOrNull();
        }
        let item: T | null = null;
        while (this.iterator.hasNext()) {
            item = this.iterator.next();
        }
        return item;
    }

    /**
     * Returns the last element of the sequence or the last element matching `predicate` if present, otherwise returns `null`.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {T}
     */
    findLast<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T | null {
        return this.lastOrNull(predicate);
    }

}