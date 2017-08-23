import Sequence from "./Sequence";

/**
 * Returns a map consisting of each key-value pair. If a `map` is passed
 * the pairs are set on this map. Duplicate keys override each other.
 *
 * @param {Map<K, V>} map
 * @returns {Map<K, V>}
 */
function toMap<K, V>(this: Sequence<[K, V]>, map?: Map<K, V>): Map<K, V> {
    const result = map || new Map<K, V>();
    while (this.iterator.hasNext()) {
        const pair = this.iterator.next();
        const key = pair[0];
        const value = pair[1];
        result.set(key, value);
    }
    return result;
}

export default toMap;