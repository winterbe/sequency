import Sequence from "./Sequence";

/**
 * Returns a pair of arrays where the first array contains all first values
 * and the second array all second values from each input pair of the sequence.
 *
 * @returns {[Array<T> , Array<S>]}
 */
function unzip<T, S>(this: Sequence<[T, S]>): [Array<T>, Array<S>] {
    const array1: Array<T> = [];
    const array2: Array<S> = [];
    while (this.iterator.hasNext()) {
        const [first, second] = this.iterator.next();
        array1.push(first);
        array2.push(second);
    }
    return [array1, array2];
}

export default unzip;