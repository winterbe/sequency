import ComparatorFactory from "./ComparatorFactory";
import Comparator from "./Comparator";

function compare<T>(comparison: (a: T, b: T) => number): Comparator<T> {
    return Object.assign(comparison, {
        reversed(): Comparator<T> {
            return compare(
                (a: T, b: T) => comparison(a, b) * -1
            );
        },
        then(nextComparison: (a: T, b: T) => number): Comparator<T> {
            return compare(
                (a: T, b: T) => {
                    const result = comparison(a, b);
                    return result !== 0
                        ? result
                        : nextComparison(a, b);
                }
            );
        },
        thenDescending(nextComparison: (a: T, b: T) => number): Comparator<T> {
            return this.then(
                compare(nextComparison)
                    .reversed()
            );
        },
        thenBy(keyOrSelector: any): Comparator<T> {
            const selector = asSelector<T>(keyOrSelector);
            return this.then(
                (a: T, b: T) => naturalCompare(selector(a), selector(b))
            );
        },
        thenByDescending(keyOrSelector: any): Comparator<T> {
            const selector = asSelector<T>(keyOrSelector);
            return this.then(
                compare(
                    (a: T, b: T) => naturalCompare(selector(a), selector(b))
                ).reversed()
            );
        }
    });
}

function compareBy<T>(keyOrSelector: any): Comparator<T> {
    const selector = asSelector<T>(keyOrSelector);
    return compare<T>(
        (a: T, b: T) => naturalCompare(selector(a), selector(b))
    );
}

function compareByDescending<T>(keyOrSelector: any): Comparator<T> {
    const selector = asSelector<T>(keyOrSelector);
    return compare<T>(
        (a: T, b: T) => naturalCompare(selector(b), selector(a))
    );
}

function asSelector<T>(keyOrSelector: (item: T) => any | string): (item: T) => any {
    return typeof keyOrSelector === "function"
        ? keyOrSelector
        : (item: T) => (item as any)[keyOrSelector as string];
}

function naturalCompare<T>(a: T, b: T): number {
    return a < b ? -1 : a > b ? 1 : 0;
}

function naturalOrder<T>(): Comparator<T> {
    return compare(naturalCompare);
}

function reverseOrder<T>(): Comparator<T> {
    return compare<T>(naturalCompare).reversed();
}

function nullsLast<T>(): Comparator<T> {
    return compare<T>(
        (a: T, b: T) => a === null ? 1 : b === null ? -1 : 0
    );
}

function nullsFirst<T>(): Comparator<T> {
    return compare<T>(
        (a: T, b: T) => a === null ? -1 : b === null ? 1 : 0
    );
}

function createComparatorFactory<T>(): ComparatorFactory<T> {
    return {
        compare,
        compareBy,
        compareByDescending,
        naturalOrder,
        reverseOrder,
        nullsFirst,
        nullsLast
    };
}

export default createComparatorFactory;