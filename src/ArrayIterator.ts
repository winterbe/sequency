import Iterator from "./Iterator";

export default class ArrayIterator<T> implements Iterator<T> {
    private nextIndex: number = 0;

    constructor(private readonly array: Array<T>) {}

    hasNext(): boolean {
        return this.nextIndex < this.array.length;
    }

    next(): T {
        try {
            return this.array[this.nextIndex];
        } finally {
            this.nextIndex++;
        }
    }

}