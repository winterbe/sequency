import Sequence from "./Sequence";

/**
 * Returns a map consisting of the elements mapped by the given `keySelector`. The value
 * can optionally be transformed into another value by specifying a `valueTransformer`.
 *
 * @param {(value: T) => K} keySelector
 * @param {(value: T) => V} valueTransform
 * @returns {Map<K, T | V>}
 */
function associateBy<T, K, V>(this: Sequence<T>,
                              keySelector: (value: T) => K,
                              valueTransform?: (value: T) => V): Map<K, V | T> {
    const result = new Map<K, V | T>();
    const transform = valueTransform != null
        ? valueTransform
        : (value: T) => value;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const key = keySelector(item);
        const value = transform(item);
        result.set(key, value);
    }
    return result;
}

export default associateBy;