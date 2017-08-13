import SequenceIterator from "./SequenceIterator";
import map from "./map";
import filter from "./filter";
import flatMap from "./flatMap";
import firstOrNull from "./firstOrNull";
import first from "./first";
import lastOrNull from "./lastOrNull";
import onEach from "./onEach";
import forEach from "./forEach";
import toArray from "./toArray";
import last from "./last";
import all from "./all";
import any from "./any";
import none from "./none";
import ArrayIterator from "./ArrayIterator";

export default class Sequence<T> {
    private readonly _iterator: SequenceIterator<T>;

    constructor(iterator: SequenceIterator<T>) {
        this._iterator = iterator;
    }

    get iterator(): SequenceIterator<T> {
        return this._iterator;
    }

    map = map;
    filter = filter;
    flatMap = flatMap;
    onEach = onEach;
    forEach = forEach;
    toArray = toArray;
    first = first;
    firstOrNull = firstOrNull;
    last = last;
    lastOrNull = lastOrNull;
    all = all;
    any = any;
    none = none;
}

export function sequenceOf<T>(...args: Array<T>): Sequence<T> {
    return asSequence(args);
}

export function emptySequence() {
    return asSequence([]);
}

export function asSequence<T>(array: Array<T>): Sequence<T> {
    return new Sequence<T>(new ArrayIterator<T>(array));
}