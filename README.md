# Sequency [![Travic CI](https://travis-ci.org/winterbe/sequency.svg?branch=master)](https://travis-ci.org/winterbe/sequency)

> Functional sequences for processing iterable data in JavaScript - inspired by [Kotlin](https://kotlinlang.org/) [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/).

```js
import {sequenceOf} from 'sequency';

const array = sequenceOf(1, 2, 3)
    .filter(num => num % 2 === 1)
    .map(num => `odd=${num}`)
    .toArray();

console.log(array);  // ['odd=1', 'odd=3']
```

<p align="center">
   <i>Follow on <a href="https://twitter.com/winterbe_">Twitter</a> for Updates</i>
</p>

## Getting started

Sequency is a type-safe functional programming library for synchronous processing of iterable data such as arrays, sets and maps. It's written in TypeScript, compiled to ES5-compatible JavaScript and works in all current browsers and Node applications.

Download the [latest release](https://github.com/winterbe/sequency/releases) from GitHub or install Sequency from NPM:

```bash
npm install sequency

# or

yarn add sequency
```

> Not convinced? [Try Sequency](https://npm.runkit.com/sequency) right in your browser.

## How sequences works

Each `Sequence` provides a fluent functional API consisting of intermediate and terminal operations. Intermediate functions return a new sequence, thus enabling method chaining while terminal functions return an arbitrary result.

Sequences can be created with one of the following functions:

```js
import {sequenceOf, asSequence, emptySequence} from 'sequency';
```

- `sequenceOf` accepts one or many values and returns a new sequence.
- `asSequence` accepts an iterable (e.g. an array, set or map) and returns a new sequence.
- `emptySequence` returns a new empty sequence.

Sequences are lazily evaluated to avoid examining all of the input data when it's not necessary. Sequences always perform the minimal amount of operations to gain results. E.g. in a `filter - map - find` sequence both `map` and `find` are executed just one time before returning the single result.

## API documentation

Sequency is inspired by [Kotlin](https://kotlinlang.org/) [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/) and provides mostly the same API. 

Each `Sequence` provides the following methods (more explanations coming soon):

- `map()`
- `mapNotNull()`
- `mapIndexed()`
- `filter()`
- `filterNot()`
- `filterNotNull()`
- `filterIndexed()`
- `flatMap()`
- `distinct()`
- `distinctBy()`
- `withIndex()`
- `drop()`
- `take()`
- `onEach()`
- `forEach()`
- `forEachIndexed()`
- `toArray()`
- `toList()`
- `toSet()`
- `toMap()`
- `first()`
- `firstOrNull()`
- `last()`
- `lastOrNull()`
- `find()`
- `findLast()`
- `all()`
- `any()`
- `none()`
- `count()`
- `contains()`
- `indexOf()`
- `indexOfFirst()`
- `indexOfLast()`
- `elementAt()`
- `elementAtOrNull()`
- `elementAtOrElse()`
- `joinTo()`
- `joinToString()`
- `single()`
- `singleOrNull()`
- `associate()`
- `associateBy()`
- `groupBy()`
- `reduce()`
- `reduceIndexed()`
- `fold()`
- `foldIndexed()`
- `flatten()`
- `partition()`
- `chunk()`
- `sorted()`
- `sortedDescending()`
- `sortedBy()`
- `sortedByDescending()`
- `sortedWith()`
- `plus()`
- `minus()`
- `zip()`
- `unzip()`
- `sum()`
- `sumBy()`
- `reverse()`

## License

MIT © [Benjamin Winterberg](https://twitter.com/winterbe_)
