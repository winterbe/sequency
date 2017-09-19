import Comparator from "./Comparator";

/**
 * Defines various methods for constructing comparators.
 */
interface ComparatorFactory<T> {

    /**
     * Constructs a new comparator where values are ordered by the given
     * comparison function.
     *
     * @param {(a: T, b: T) => number} comparison
     * @returns {Comparator<T>}
     */
    compare(comparison: (a: T, b: T) => number): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered by the natural ascending order
     * of the property selected by the given `selector` function.
     *
     * @param {(value: T) => any} selector
     * @returns {Comparator<T>}
     */
    compareBy(selector: (value: T) => any): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered by the natural ascending order
     * of values for the given `key`.
     *
     * @param {keyof T} key
     * @returns {Comparator<T>}
     */
    compareBy(key: keyof T): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered by the natural descending order
     * of the property selected by the given `selector` function.
     *
     * @param {(value: T) => any} selector
     * @returns {Comparator<T>}
     */
    compareByDescending(selector: (value: T) => any): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered by the natural descending order
     * of values for the given `key`.
     *
     * @param {keyof T} key
     * @returns {Comparator<T>}
     */
    compareByDescending(key: keyof T): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered naturally.
     *
     * @returns {Comparator<T>}
     */
    naturalOrder(): Comparator<T>;

    /**
     * Constructs a new comparator where values are ordered in reverse natural order.
     *
     * @returns {Comparator<T>}
     */
    reverseOrder(): Comparator<T>;

    /**
     * Constructs a new comparator where null values are ordered at the beginning.
     *
     * @returns {Comparator<T>}
     */
    nullsFirst(): Comparator<T>;

    /**
     * Constructs a new comparator where null values are ordered at the end.
     *
     * @returns {Comparator<T>}
     */
    nullsLast(): Comparator<T>;
}

export default ComparatorFactory;