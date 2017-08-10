import Sequence from "./Sequence";
import ArrayIterator from "./ArrayIterator";

export function sequenceOf<T>(...args: Array<T>): Sequence<T> {
    return asSequence(args);
}

export function asSequence<T>(array: Array<T>): Sequence<T> {
    return new Sequence<T>(new ArrayIterator<T>(array));
}