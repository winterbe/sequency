import Sequence from "./Sequence";

function reduceIndexed<S, T extends S>(this: Sequence<T>, operation: (index: number, acc: S, element: T) => S): S {
    if (!this.iterator.hasNext()) {
        throw new Error("Cannot reduce empty sequence");
    }
    let index = 1;
    let result: S = this.iterator.next();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        result = operation(index, result, item);
        index++;
    }
    return result;
}

export default reduceIndexed;