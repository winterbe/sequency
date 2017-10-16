import Sequence, {asSequence, isSequence} from "./Sequence";

export class Merge {

    /**
     * Merges the elements of both sequences into a new sequence. Each element of this sequence is eventually replaced with
     * an element of the other sequence by comparing results of the given `selector` function. If no value is found in the other
     * sequence the element is retained. New elements of the other sequence are appended to the end of the new sequence or
     * prepended to the start of the new sequence, if `prependNewValues` is set to `true`.
     *
     * @param {Sequence<T>} other
     * @param {(value: T) => S} selector
     * @param prependNewValues
     * @returns {Sequence<T>}
     */
    merge<T, S>(this: Sequence<T>, other: Sequence<T> | Iterable<T>, selector: (value: T) => S, prependNewValues: boolean = false): Sequence<T> {
        let mergeValues = isSequence(other)
            ? other.toArray()
            : asSequence(other).toArray();
        const leftValues = this.toArray();
        const result = leftValues.map(left => {
            const selected = selector(left);
            const right = asSequence(mergeValues)
                .find(it => selector(it) === selected);
            if (right != null) {
                mergeValues = mergeValues.filter(it => it !== right);
                return right;
            } else {
                return left;
            }
        });
        if (prependNewValues) {
            return asSequence([...mergeValues, ...result]);
        } else {
            return asSequence([...result, ...mergeValues]);
        }
    }

}