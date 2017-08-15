import Sequence from "./Sequence";

function filterNot<T>(this: Sequence<T>, predicate: (value: T) => boolean): Sequence<T> {
    return this.filter((value: T) => !predicate(value));
}

export default filterNot;