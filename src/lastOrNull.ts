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
        let result: T | null = null;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result = item.value;
        }
        return result;
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