import Sequence from "./Sequence";

function associate<T, K, V>(this: Sequence<T>, transform: (value: T) => {key: K, value: V}): Map<K, V> {
    const result = new Map<K, V>();
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const pair = transform(item);
        result.set(pair.key, pair.value);
    }
    return result;
}

export default associate;