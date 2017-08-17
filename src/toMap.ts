import Sequence from "./Sequence";

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