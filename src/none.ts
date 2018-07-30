import Sequence from "./Sequence";

export class None {

    /**
     * Returns `true` if no element match the given `predicate` or if the sequence is empty
     * if no predicate is present.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {boolean}
     */
    none<T>(this: Sequence<T>, predicate?: (value: T) => boolean): boolean {
        if (predicate == null) {
            return this.iterator.next().done;
        }
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (predicate(item.value)) {
                return false;
            }
        }
        return true;
    }

}