import Sequence from "./Sequence";

function last<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T {
    const result = this.lastOrNull(predicate);
    if (result == null) {
        throw new Error("No such element");
    }
    return result;
}

export default last;