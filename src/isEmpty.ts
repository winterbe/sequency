import Sequence from "./Sequence";

export class IsEmpty {
    /**
     * Returns `true` the sequence is empty
     *
     * @returns {boolean}
     */
    isEmpty<T>(this: Sequence<T>) {
        return !this.isNotEmpty();
    }
}