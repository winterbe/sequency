import SequenceIterator, {GeneratorIterator, GeneratorSeedIterator, IterableIterator} from "./SequenceIterator";
import {All} from "./all";
import {Any} from "./any";
import {AsIterable} from "./asIterable";
import {Associate} from "./associate";
import {AssociateBy} from "./associateBy";
import {Average} from "./average";
import {Chunk} from "./chunk";
import {Contains} from "./contains";
import {Count} from "./count";
import {Distinct} from "./distinct";
import {DistinctBy} from "./distinctBy";
import {Drop} from "./drop";
import {DropWhile} from "./dropWhile";
import {ElementAt} from "./elementAt";
import {ElementAtOrElse} from "./elementAtOrElse";
import {ElementAtOrNull} from "./elementAtOrNull";
import {Filter} from "./filter";
import {FilterIndexed} from "./filterIndexed";
import {FilterNot} from "./filterNot";
import {FilterNotNull} from "./filterNotNull";
import {First} from "./first";
import {FirstOrNull} from "./firstOrNull";
import {FlatMap} from "./flatMap";
import {Flatten} from "./flatten";
import {Fold} from "./fold";
import {FoldIndexed} from "./foldIndexed";
import {ForEach} from "./forEach";
import {ForEachIndexed} from "./forEachIndexed";
import {GroupBy} from "./groupBy";
import {IndexOf} from "./indexOf";
import {IndexOfFirst} from "./indexOfFirst";
import {IndexOfLast} from "./indexOfLast";
import {JoinToString} from "./joinToString";
import {Last} from "./last";
import {LastOrNull} from "./lastOrNull";
import {Map} from "./map";
import {MapIndexed} from "./mapIndexed";
import {MapNotNull} from "./mapNotNull";
import {Max} from "./max";
import {MaxBy} from "./maxBy";
import {MaxWith} from "./maxWith";
import {Merge} from "./merge";
import {Min} from "./min";
import {MinBy} from "./minBy";
import {Minus} from "./minus";
import {MinWith} from "./minWith";
import {None} from "./none";
import {OnEach} from "./onEach";
import {Partition} from "./partition";
import {Plus} from "./plus";
import {Reduce} from "./reduce";
import {ReduceIndexed} from "./reduceIndexed";
import {Reverse} from "./reverse";
import {Single} from "./single";
import {SingleOrNull} from "./singleOrNull";
import {Sorted} from "./sorted";
import {SortedBy} from "./sortedBy";
import {SortedByDescending} from "./sortedByDescending";
import {SortedDescending} from "./sortedDescending";
import {SortedWith} from "./sortedWith";
import {Sum} from "./sum";
import {SumBy} from "./sumBy";
import {Take} from "./take";
import {TakeWhile} from "./takeWhile";
import {ToArray} from "./toArray";
import {ToMap} from "./toMap";
import {ToSet} from "./toSet";
import {Unzip} from "./unzip";
import {WithIndex} from "./withIndex";
import {Zip} from "./zip";

/**
 * @hidden
 */
export interface SequenceOperators<T> extends All, Any, AsIterable, Associate, AssociateBy<T>, Average, Chunk, Contains, Count, Distinct, DistinctBy, Drop,
    DropWhile, ElementAt, ElementAtOrElse, ElementAtOrNull, Filter, FilterIndexed, FilterNot, FilterNotNull, First, FirstOrNull, FlatMap, Flatten, Fold, FoldIndexed,
    ForEach, ForEachIndexed, GroupBy, IndexOf, IndexOfFirst, IndexOfLast, JoinToString, Last, LastOrNull, Map, MapIndexed, MapNotNull, Max, MaxBy, MaxWith, Merge, Min, MinBy,
    Minus, MinWith, None, OnEach, Partition, Plus, Reduce, ReduceIndexed, Reverse, Single, SingleOrNull, Sorted, SortedBy, SortedByDescending, SortedDescending, SortedWith,
    Sum, SumBy, Take, TakeWhile, ToArray, ToMap, ToSet, Unzip, WithIndex, Zip {
}

/**
 * A Sequence provides a fluent functional API consisting
 * of various intermediate and terminal operations for processing the iterated data.
 * The operations are evaluated lazily to avoid examining all of the input data
 * when it's not necessary. Sequences can be iterated only once.
 */
export default interface Sequence<T> extends SequenceOperators<T> {
    readonly iterator: SequenceIterator<T>;
}

class SequenceImpl<T> {
    constructor(readonly iterator: SequenceIterator<T>) {
    }
}

applyMixins(SequenceImpl, [All, Any, AsIterable, Associate, AssociateBy, Average, Chunk, Contains, Count, Distinct, DistinctBy, Drop,
    DropWhile, ElementAt, ElementAtOrElse, ElementAtOrNull, Filter, FilterIndexed, FilterNot, FilterNotNull, First, FirstOrNull, FlatMap, Flatten, Fold, FoldIndexed,
    ForEach, ForEachIndexed, GroupBy, IndexOf, IndexOfFirst, IndexOfLast, JoinToString, Last, LastOrNull, Map, MapIndexed, MapNotNull, Max, MaxBy, MaxWith, Merge, Min, MinBy,
    Minus, MinWith, None, OnEach, Partition, Plus, Reduce, ReduceIndexed, Reverse, Single, SingleOrNull, Sorted, SortedBy, SortedByDescending, SortedDescending, SortedWith,
    Sum, SumBy, Take, TakeWhile, ToArray, ToMap, ToSet, Unzip, WithIndex, Zip]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

export function sequenceOf<T>(...args: Array<T>): Sequence<T> {
    return asSequence(args);
}

export function emptySequence<T>(): Sequence<T> {
    return asSequence([]);
}

export function asSequence<T>(iterable: Iterable<T>): Sequence<T> {
    if (iterable === null) {
        throw new Error("Cannot create sequence for input: null");
    }
    if (iterable === undefined) {
        throw new Error("Cannot create sequence for input: undefined");
    }
    if (iterable[Symbol.iterator] == null) {
        throw new Error("Cannot create sequence for non-iterable input: " + iterable);
    }
    return createSequence<T>(new IterableIterator(iterable));
}

export function createSequence<T>(iterator: SequenceIterator<T>): Sequence<T> {
    return new SequenceImpl(iterator) as any;
}

export function isSequence<T>(object: any): object is Sequence<T> {
    return object instanceof SequenceImpl;
}

export function extendSequence(mixin: { new(): any }) {
    applyMixins(SequenceImpl, [mixin]);
}

export function generateSequence<T>(nextFunction: () => T | null | undefined): Sequence<T>;
export function generateSequence<T>(seedFunction: () => T | null | undefined, nextFunction: (item: T) => T | null | undefined): Sequence<T>;
export function generateSequence<T>(seed: T | null | undefined, nextFunction: (item: T) => T | null | undefined): Sequence<T>;
export function generateSequence<T>(a: any, b?: any): Sequence<T> {
    if (typeof a === "function" && b == null) {
        return createSequence<T>(new GeneratorIterator(a));
    }
    const seed = typeof a === "function" ? a() : a;
    return seed != null
        ? createSequence<T>(new GeneratorSeedIterator(seed, b))
        : emptySequence<T>();
}

export function range(startInclusive: number, endExclusive: number, step: number = 1): Sequence<number> {
    if (startInclusive >= endExclusive) {
        throw new Error(`startInclusive [${startInclusive}] must be lower then endExclusive [${endExclusive}]`);
    }
    if (startInclusive === endExclusive - 1) {
        return emptySequence();
    }
    let current = startInclusive;
    return generateSequence(() => {
        try {
            return current < endExclusive
                ? current
                : undefined;
        } finally {
            current += step;
        }
    });
}