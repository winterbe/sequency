import Sequence from "./Sequence";

export class Partition {

    /**
     * Evaluates the given `predicate` for each element of the sequence and assorts each element into one of two lists
     * according to the result of the predicate. Returns both lists as an object.
     *
     * @param {(value: T) => boolean} predicate
     * @returns {{true: Array<T>; false: Array<T>}}
     */
    partition<T>(this: Sequence<T>, predicate: (value: T) => boolean): { "true": Array<T>, "false": Array<T> } {
        const arrayTrue: Array<T> = [];
        const arrayFalse: Array<T> = [];
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            if (predicate(item.value)) {
                arrayTrue.push(item.value);
            } else {
                arrayFalse.push(item.value);
            }
        }
        return { "true": arrayTrue, "false": arrayFalse };
    }

}