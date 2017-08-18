import Sequence from "./Sequence";

function single<T>(this: Sequence<T>, predicate?: (value: T) => boolean): T {
    if (predicate != null) {
        return this.filter(predicate).single();
    }
    if (!this.iterator.hasNext()) {
        throw new Error("No such element");
    }
    const item = this.iterator.next();
    if (this.iterator.hasNext()) {
        throw new Error("Expect single element");
    }
    return item;
}

export default single;