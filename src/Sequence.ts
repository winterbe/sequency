import SequenceIterator from "./SequenceIterator";
import ArrayIterator from "./ArrayIterator";
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
import count from "./count";
import distinct from "./distinct";
import contains from "./contains";
import indexOf from "./indexOf";
import elementAt from "./elementAt";
import elementAtOrNull from "./elementAtOrNull";
import elementAtOrElse from "./elementAtOrElse";
import indexOfFirst from "./indexOfFirst";
import indexOfLast from "./indexOfLast";
import joinToString from "./joinToString";
import mapIndexed from "./mapIndexed";
import withIndex from "./withIndex";
import filterIndexed from "./filterIndexed";
import forEachIndexed from "./forEachIndexed";
import distinctBy from "./distinctBy";
import drop from "./drop";
import take from "./take";
import single from "./single";
import singleOrNull from "./singleOrNull";
import filterNot from "./filterNot";
import associate from "./associate";
import associateBy from "./associateBy";
import groupBy from "./groupBy";
import reduce from "./reduce";
import reduceIndexed from "./reduceIndexed";
import fold from "./fold";
import foldIndexed from "./foldIndexed";
import flatten from "./flatten";

export default class Sequence<T> {
    constructor(readonly iterator: SequenceIterator<T>) {}

    map = map;
    mapIndexed = mapIndexed;
    filter = filter;
    filterNot = filterNot;
    filterIndexed = filterIndexed;
    flatMap = flatMap;
    distinct = distinct;
    distinctBy = distinctBy;
    withIndex = withIndex;
    drop = drop;
    take = take;
    onEach = onEach;
    forEach = forEach;
    forEachIndexed = forEachIndexed;
    toArray = toArray;
    first = first;
    firstOrNull = firstOrNull;
    last = last;
    lastOrNull = lastOrNull;
    find = firstOrNull;
    findLast = lastOrNull;
    all = all;
    any = any;
    none = none;
    count = count;
    contains = contains;
    indexOf = indexOf;
    indexOfFirst = indexOfFirst;
    indexOfLast = indexOfLast;
    elementAt = elementAt;
    elementAtOrNull = elementAtOrNull;
    elementAtOrElse = elementAtOrElse;
    joinTo = joinToString;
    joinToString = joinToString;
    single = single;
    singleOrNull = singleOrNull;
    associate = associate;
    associateBy = associateBy;
    groupBy = groupBy;
    reduce = reduce;
    reduceIndexed = reduceIndexed;
    fold = fold;
    foldIndexed = foldIndexed;
    flatten = flatten;
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