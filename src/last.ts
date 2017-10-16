import Sequence from "./Sequence";

export class Last {

    /**
     * Returns the last element of the sequence or the last element matching `predicate` if present, otherwise throws
     * an error.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {T}
     */
    last<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T {
        if (predicate != null) {
            return this.filter(predicate).last();
        }
        if (!this.iterator.hasNext()) {
            throw new Error("No such element");
        }
        let item: T;
        while (this.iterator.hasNext()) {
            item = this.iterator.next();
        }
        return item!;
    }

}