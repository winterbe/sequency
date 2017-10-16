import Sequence from "./Sequence";

export class OnEach {

    /**
     * Performs the given `action` for each element and returns the sequence.
     *
     * @param {(value: T) => void} action
     * @returns {Sequence<T>}
     */
    onEach<T>(this: Sequence<T>, action: (value: T) => void): Sequence<T> {
        return this.map(it => {
            action(it);
            return it;
        });
    }

}