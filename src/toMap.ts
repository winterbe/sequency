import Sequence from "./Sequence";

export class ToMap {

    /**
     * Returns a map consisting of each key-value pair. If a `map` is passed
     * the pairs are set on this map. Duplicate keys override each other.
     *
     * @param {Map<K, V>} map
     * @returns {Map<K, V>}
     */
    toMap<K, V>(this: Sequence<[K, V]>, map?: Map<K, V>): Map<K, V> {
        const result = map || new Map<K, V>();
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const pair = item.value;
            const key = pair[0];
            const value = pair[1];
            result.set(key, value);
        }
        return result;
    }

}