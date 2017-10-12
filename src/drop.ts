import Sequence from "./Sequence";

export class Drop {

    /**
     * Returns a new sequence which discards the first `n` elements;
     *
     * @param {number} n
     * @returns {Sequence<T>}
     */
    drop<T>(this: Sequence<T>, n: number): Sequence<T> {
        return this.withIndex()
            .dropWhile(it => it.index < n)
            .map(it => it.value);
    }

}