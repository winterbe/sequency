import Sequence from "./Sequence";

export class ForEach {

    /**
     * Performs the given `action` (side-effect) for each element of the sequence.
     *
     * @param {(T) => void} action
     */
    forEach<T>(this: Sequence<T>, action: (item: T) => void) {
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            action(item.value);
        }
    }

}