import Sequence from "./Sequence";

/**
 * Splits the elements of the sequence into arrays which length is determined by
 * the given `chunkSize` and returns all chunks as array.
 *
 * @param {number} chunkSize
 * @returns {Array<Array<T>>}
 */
function chunk<T>(this: Sequence<T>, chunkSize: number): Array<Array<T>> {
    if (chunkSize < 1) {
        throw new Error("chunkSize must be > 0 but is " + chunkSize);
    }
    const result: Array<Array<T>> = [];
    let index = 0;
    while (this.iterator.hasNext()) {
        const item = this.iterator.next();
        const chunk = Math.floor(index / chunkSize);
        if (result[chunk] == null) {
            result[chunk] = [item];
        } else {
            result[chunk].push(item);
        }
        index++;
    }
    return result;
}

export default chunk;