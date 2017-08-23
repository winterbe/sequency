/**
 * Defines a `value` with a zero-based `index`.
 */
interface IndexedValue<T> {
    index: number
    value: T
}
export default IndexedValue;