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
        let result: T;
        let empty = true;
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            result = item.value;
            empty = false;
        }
        if (empty) {
            throw new Error("No such element");
        }
        return result!;
    }

}