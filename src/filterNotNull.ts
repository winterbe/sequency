import Sequence from "./Sequence";

function filterNotNull<T>(this: Sequence<T>): Sequence<T> {
    return this.filter(it => it !== null);
}

export default filterNotNull;