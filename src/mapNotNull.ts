import Sequence, {emptySequence, sequenceOf} from "./Sequence";

/**
 * Transforms each element into another value by applying the given `transform` function and returns a new sequence.
 * Transformations into `null` values are discarded.
 *
 * @param {(value: T) => R} transform
 * @returns {Sequence<R>}
 */
function mapNotNull<T, R>(this: Sequence<T>, transform: (value: T) => R | null): Sequence<R> {
    return this.flatMap((value: T) => {
        const item = transform(value);
        return item !== null
            ? sequenceOf(item)
            : emptySequence();
    });
}

export default mapNotNull;