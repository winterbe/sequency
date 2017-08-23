import Sequence from "./Sequence";

/**
 * Performs the given `action` (side-effect) for each element of the sequence.
 *
 * @param {(T) => void} action
 */
function forEach<T>(this: Sequence<T>, action: (T) => void) {
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        action(item);
    }
}

export default forEach;