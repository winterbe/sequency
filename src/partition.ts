import Sequence from "./Sequence";

/**
 * Evaluates the given `predicate` for each element of the sequence and assorts each element into one of two lists
 * according to the result of the predicate. Returns both lists as an object.
 *
 * @param {(value: T) => boolean} predicate
 * @returns {{true: Array<T>; false: Array<T>}}
 */
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