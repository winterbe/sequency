interface SequenceIterator<T> {
    hasNext(): boolean
    next(): T
}

export default SequenceIterator;