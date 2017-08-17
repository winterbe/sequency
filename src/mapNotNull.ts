import Sequence, {emptySequence, sequenceOf} from "./Sequence";

function mapNotNull<T, R>(this: Sequence<T>, transform: (value: T) => R | null): Sequence<R> {
    return this.flatMap((value: T) => {
        const item = transform(value);
        return item !== null
            ? sequenceOf(item)
            : emptySequence();
    });
}

export default mapNotNull;