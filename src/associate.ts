import Sequence from "./Sequence";

export class Associate {

    /**
     * Transforms each element into a key-value pair and returns the results as map. In case of
     * duplicate keys the last key-value pair overrides the other.
     *
     * @param {(value: T) => [K , V]} transform
     * @returns {Map<K, V>}
     */
    associate<T, K, V>(this: Sequence<T>, transform: (value: T) => [K, V]): Map<K, V> {
        const result = new Map<K, V>();
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const pair = transform(item.value);
            result.set(pair[0], pair[1]);
        }
        return result;
    }

}