# API Documentation

Sequency is a type-safe functional programming library for processing iterable data such as arrays, sets and maps. It's written in TypeScript, compiles to ES5-compatible JavaScript and works in all current browsers and Node applications.

Download the [latest release](https://github.com/winterbe/sequency/releases) from [GitHub](https://github.com/winterbe/sequency) or install Sequency from [NPM](https://github.com/winterbe/sequency):

```bash
npm install sequency
```
or
```bash
yarn add sequency
```

### How Sequency works

Sequency is centered around the interface [Sequence](https://winterbe.github.io/sequency/interfaces/Sequence.html) to process any kind of iterable data such as arrays, maps and sets. 

The interface `Sequence` provides a fluent functional API consisting of intermediate and terminal operations. Intermediate functions return a new sequence, thus enabling method chaining while terminal functions return an arbitrary result. You can explore all available `Sequence` operations by navigating to the [Sequence](https://winterbe.github.io/sequency/interfaces/Sequence.html) interface.

### Creating Sequences from your data

Sequences can be created with one of the following functions:

```js
import {sequenceOf, asSequence, emptySequence, generateSequence} from "sequency";
```

- `sequenceOf` accepts one or many values and returns a new sequence.
- `asSequence` accepts an iterable (e.g. an array, set or map) and returns a new sequence.
- `emptySequence` returns a new empty sequence.
- `generateSequence` creates a sequence from the results of the given generator function.

### Code sample

```js
import {asSequence} from "sequency";

const numbers = [1, 2, 3, 4, 5];

const result = asSequence(numbers)
  .filter(num => num > 2)
  .reverse()
  .toArray()

// result: [5, 4, 3]
```

### License

MIT © [winterbe](https://twitter.com/winterbe_)
