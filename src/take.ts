import Sequence from "./Sequence";

export default function take<T>(this: Sequence<T>, n: number): Sequence<T> {
    return this.withIndex()
        .filter(it => it.index < n)
        .map(it => it.value);
}