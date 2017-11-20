import Sequence from "./Sequence";

export class All {

    /**
     * Returns `true` if all elements match the given `predicate`.
     *
     * @param {(T) => boolean} predicate
     * @returns {boolean}
     */
    all<T>(this: Sequence<T>, predicate: (item: T) => boolean): boolean {
        while (this.iterator.hasNext()) {
            const item = this.iterator.next();
            if (!predicate(item)) {
                return false;
            }
        }
        return true;
    }

}