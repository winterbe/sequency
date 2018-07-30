import Sequence from "./Sequence";

export class Contains {

    /**
     * Returns `true` if the sequence contains the given `element`.
     *
     * @param {T} element
     * @returns {boolean}
     */
    contains<T>(this: Sequence<T>, element: T): boolean {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (element === item.value) {
                return true;
            }
        }
        return false;
    }

}