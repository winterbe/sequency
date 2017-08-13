import Sequence from "./Sequence";

function last<T>(this: Sequence<T>, predicate?: (T) => boolean): T {
    const result = this.lastOrNull(predicate);
    if (result == null) {
        throw new Error("No such element");
    }
    return result;
}

export default last;