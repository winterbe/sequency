import Sequence from "./Sequence";

export class FilterNotNull {

    /**
     * Returns a new sequence consisting of all non-null elements.
     *
     * @returns {Sequence<T>}
     */
    filterNotNull<T>(this: Sequence<T>): Sequence<T> {
        return this.filter(it => it !== null);
    }

}