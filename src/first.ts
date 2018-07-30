import Sequence from "./Sequence";

export class First {

    /**
     * Returns the first element of the sequence or the first element matching `predicate` if present, otherwise throws
     * an error.
     *
     * @param {(T) => boolean} predicate
     * @returns {T}
     */
    first<T>(this: Sequence<T>, predicate?: (item: T) => boolean): T {
        if (predicate != null) {
            return this.filter(predicate).first();
        }
        const item = this.iterator.next();
        if (item.done) {
            throw new Error("No such element");
        }
        return item.value;
    }

}