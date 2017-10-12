import Sequence, {asSequence, isSequence} from "./Sequence";

export class Flatten {

    /**
     * Returns a single flat sequence of all the items from all sequences or iterables.
     *
     * @returns {Sequence<T>}
     */
    flatten<T>(this: Sequence<Sequence<T> | Iterable<T>>): Sequence<T> {
        return this.flatMap(it => {
            if (isSequence(it)) {
                return it;
            } else {
                return asSequence(it);
            }
        });
    }

}