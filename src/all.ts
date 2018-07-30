import Sequence from "./Sequence";

export class All {

    /**
     * Returns `true` if all elements match the given `predicate`.
     *
     * @param {(T) => boolean} predicate
     * @returns {boolean}
     */
    all<T>(this: Sequence<T>, predicate: (item: T) => boolean): boolean {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (!predicate(item.value)) {
                return false;
            }
        }
        return true;
    }

}