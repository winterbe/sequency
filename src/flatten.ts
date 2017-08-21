import Sequence, {asSequence} from "./Sequence";

/**
 * Returns a single flat sequence of all the items from all sequences or iterables.
 *
 * @returns {Sequence<T>}
 */
function flatten<T>(this: Sequence<Sequence<T> | Iterable<T>>): Sequence<T> {
    return this.flatMap(it => {
        if (it instanceof Sequence) {
            return it;
        } else {
            return asSequence(it);
        }
    });
}

export default flatten;