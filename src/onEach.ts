import Sequence from "./Sequence";

/**
 * Performs the given `action` for each element and returns the sequence.
 *
 * @param {(value: T) => void} action
 * @returns {Sequence<T>}
 */
function onEach<T>(this: Sequence<T>, action: (value: T) => void): Sequence<T> {
    return this.map(it => {
        action(it);
        return it;
    });
}

export default onEach;