import Sequence from "./Sequence";

function first<T>(this: Sequence<T>, predicate?: (T) => boolean): T {
    const result = this.firstOrNull(predicate);
    if (result == null) {
        throw new Error("No such element");
    }
    return result;
}

export default first;