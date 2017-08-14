import Sequence from "./Sequence";

export default function drop<T>(this: Sequence<T>, n: number): Sequence<T> {
    return this.withIndex()
        .filter(it => it.index >= n)
        .map(it => it.value);
}