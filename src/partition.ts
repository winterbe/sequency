import Sequence from "./Sequence";

function partition<T>(this: Sequence<T>, predicate: (value: T) => boolean): { 'true': Array<T>, 'false': Array<T> } {
    const arrayTrue: Array<T> = [];
    const arrayFalse: Array<T> = [];
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        if (predicate(item)) {
            arrayTrue.push(item);
        } else {
            arrayFalse.push(item);
        }
    }
    return {'true': arrayTrue, 'false': arrayFalse};
}

export default partition;