import Sequence from "./Sequence";

export class Count {

    /**
     * Returns the number of elements of this sequence. If `predicate` is present, returns
     * the number of elements matching the given `predicate`.
     *
     * @param {(T) => boolean} predicate
     * @returns {number}
     */
    count<T>(this: Sequence<T>, predicate?: (item: T) => boolean): number {
        let num = 0;
        if (predicate == null) {
            for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
                num++;
            }
        } else {
            for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
                if (predicate(item.value)) {
                    num++;
                }
            }
        }
        return num;
    }

}