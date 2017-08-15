import Sequence from "./Sequence";

function mapIndexed<T, R>(this: Sequence<T>, transform: (index: number, value: T) => R): Sequence<R> {
    return this.withIndex()
        .map(it => transform(it.index, it.value));
}

export default mapIndexed;