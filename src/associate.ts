import Sequence from "./Sequence";

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