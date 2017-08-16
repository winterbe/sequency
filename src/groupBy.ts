import Sequence from "./Sequence";

function groupBy<T, K>(this: Sequence<T>, keySelector: (value: T) => K): Map<K, Array<T>> {
    const result = new Map<K, Array<T>>();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const key = keySelector(item);
        const array = result.get(key);
        if (array == null) {
            result.set(key, [item]);
        } else {
            array.push(item);
        }
    }
    return result;
}

export default groupBy;