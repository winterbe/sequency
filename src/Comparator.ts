/**
 * A Comparator defines a compare function enriched with methods to compose multiple
 * comparators in order to form complex comparison behavior. A compare function returns
 * negative numbers if the first value is lower than the second value, positive numbers
 * if the first value is larger than the second value and zero if both values are equal.
 */
interface Comparator<T> {
    (a: T, b: T): number;

    /**
     * Reverses the order of the current comparator.
     *
     * @returns {Comparator<T>}
     */
    reversed(): Comparator<T>;

    /**
     * Composes the current comparator with the given comparison function such
     * that the latter is applied for every equal values of the former comparator.
     *
     * @param {(a: T, b: T) => number} comparison
     * @returns {Comparator<T>}
     */
    then(comparison: (a: T, b: T) => number): Comparator<T>;

    /**
     * Composes the current comparator with the given comparison function such
     * that the latter is applied for every equal values of the current comparator
     * in reverse (descending) order.
     *
     * @param {(a: T, b: T) => number} comparison
     * @returns {Comparator<T>}
     */
    thenDescending(comparison: (a: T, b: T) => number): Comparator<T>;

    /**
     * Composes the current comparator with a comparator which compares the properties
     * selected by the given `selector` function for every equal values of the current
     * comparator.
     *
     * @param {(value: T) => any} selector
     * @returns {Comparator<T>}
     */
    thenBy(selector: (value: T) => any): Comparator<T>;

    /**
     * Composes the current comparator with a comparator which compares the values
     * of the given `key` for every equal values of the current comparator.
     *
     * @param {keyof T} key
     * @returns {Comparator<T>}
     */
    thenBy(key: keyof T): Comparator<T>;

    /**
     * Composes the current comparator with a comparator which compares the properties
     * selected by the given `selector` function for every equal values of the current
     * comparator in reverse (descending) order.
     *
     * @param {(value: T) => any} selector
     * @returns {Comparator<T>}
     */
    thenByDescending(selector: (value: T) => any): Comparator<T>;

    /**
     * Composes the current comparator with a comparator which compares the values
     * of the given `key` for every equal values of the current comparator
     * in reverse (descending) order.
     *
     * @param {keyof T} key
     * @returns {Comparator<T>}
     */
    thenByDescending(key: keyof T): Comparator<T>;
}

export default Comparator;