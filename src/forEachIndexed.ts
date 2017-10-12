import Sequence from "./Sequence";

export class ForEachIndexed {

    /**
     * Performs the given `action` (side-effect) for each element of the sequence and passes the `index` of the current
     * element (zero-based).
     *
     * @param {(index: number, value: T) => void} action
     */
    forEachIndexed<T>(this: Sequence<T>, action: (index: number, value: T) => void) {
        this.withIndex()
            .forEach(it => action(it.index, it.value));
    }

}