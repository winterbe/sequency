import Sequence from "./Sequence";

export class IsNotEmpty {
    /**
     * Returns `true` the sequence is not empty
     *
     * @returns {boolean}
     */
    isNotEmpty<T>(this: Sequence<T>) {
        return this.any(() => true);
    }
}