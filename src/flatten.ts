import Sequence, {asSequence} from "./Sequence";

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