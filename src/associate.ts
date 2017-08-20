import Sequence from "./Sequence";

/**
 * Transforms each element into a key-value pair and returns the results as map. In case of
 * duplicate keys the last key-value pair overrides the other.
 *
 * @param {(value: T) => [K , V]} transform
 * @returns {Map<K, V>}
 */
function associate<T, K, V>(this: Sequence<T>, transform: (value: T) => [K, V]): Map<K, V> {
    const result = new Map<K, V>();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const pair = transform(item);
        result.set(pair[0], pair[1]);
    }
    return result;
}

export default associate;