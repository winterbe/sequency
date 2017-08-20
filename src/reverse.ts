import Sequence from "./Sequence";

function reverse<T>(this: Sequence<T>): Sequence<T> {
    return this.withIndex()
        .sortedByDescending(it => it.index)
        .map(it => it.value);
}

export default reverse;