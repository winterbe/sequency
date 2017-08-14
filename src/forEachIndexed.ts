import Sequence from "./Sequence";

function forEachIndexed<T>(this: Sequence<T>, action: (index: number, value: T) => void) {
    this.withIndex().forEach(it => action(it.index, it.value));
}

export default forEachIndexed;