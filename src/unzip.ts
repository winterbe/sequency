import Sequence from "./Sequence";

export class Unzip {

    /**
     * Returns a pair of arrays where the first array contains all first values
     * and the second array all second values from each input pair of the sequence.
     *
     * @returns {[Array<T> , Array<S>]}
     */
    unzip<T, S>(this: Sequence<[T, S]>): [Array<T>, Array<S>] {
        const array1: Array<T> = [];
        const array2: Array<S> = [];
        for (let item = this.iterator.next(); !item.done; item = this.iterator.next()) {
            const [first, second] = item.value;
            array1.push(first);
            array2.push(second);
        }
        return [array1, array2];
    }

}