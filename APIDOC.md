# API Documentation

Sequency is a type-safe functional programming library for processing iterable data such as arrays, sets and maps. It's written in TypeScript, compiles to ES5-compatible JavaScript and works in all current browsers and Node applications.

Download the [latest release](https://github.com/winterbe/sequency/releases) from [GitHub](https://github.com/winterbe/sequency) or install Sequency from [NPM](https://github.com/winterbe/sequency):

```bash
npm install sequency
```

Or [try Sequency](https://npm.runkit.com/sequency) right in your browser.

### How sequences works

Sequency is centered around a single class `Sequence` to process any kind of iterable data. The API is inspired by Kotlin [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html). 

Each `Sequence` provides a fluent functional API consisting of intermediate and terminal operations. Intermediate functions return a new sequence, thus enabling method chaining while terminal functions return an arbitrary result. You can explore all available `Sequence` operations on this website by using the site navigation to the right.

Sequences can be created with one of the following functions:

```js
import {sequenceOf, asSequence, emptySequence} from 'sequency';
```

- `sequenceOf` accepts one or many values and returns a new sequence.
- `asSequence` accepts an iterable (e.g. an array, set or map) and returns a new sequence.
- `emptySequence` returns a new empty sequence.

Sequences are lazily evaluated to avoid examining all of the input data when it's not necessary. Sequences always perform the minimal amount of operations to gain results. E.g. in a `filter - map - find` sequence both `map` and `find` are executed just one time before returning the single result.

### License

MIT © [Benjamin Winterberg](https://twitter.com/winterbe_)
