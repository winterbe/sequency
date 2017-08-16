import Sequence from "./Sequence";

function reduce<S, T extends S>(this: Sequence<T>, operation: (acc: S, value: T) => S): S {
    if (!this.iterator.hasNext()) {
        throw new Error("Cannot reduce empty sequence");
    }
    let result: S = this.iterator.next();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(result, item);
    }
    return result;
}

export default reduce;