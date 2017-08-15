import Sequence from "./Sequence";

function filterIndexed<T>(this: Sequence<T>, predicate: (index: number, value: T) => boolean): Sequence<T> {
    return this.withIndex()
        .filter(it => predicate(it.index, it.value))
        .map(it => it.value);
}

export default filterIndexed;