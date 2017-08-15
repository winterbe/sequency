import Sequence from "./Sequence";

function asIterable<T>(this: Sequence<T>): Iterable<T> {
    const iterator = this.iterator;
    return {
        [Symbol.iterator](): Iterator<T> {
            return {
                next(value?: any): IteratorResult<T> {
                    if (!iterator.hasNext()) {
                        return {done: true, value: undefined} as any as IteratorResult<T>;
                    }
                    const item = iterator.next();
                    return {done: false, value: item} as any as IteratorResult<T>;
                }
            };
        }
    }
}

export default asIterable;