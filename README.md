# Sequence [![Travic CI](https://travis-ci.org/winterbe/sequence.svg?branch=master)](https://travis-ci.org/winterbe/sequence)

> Type-safe sequences for functional collection processing in JavaScript

```ts
const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

This library is inspired by [Kotlin](https://kotlinlang.org/) [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/), written in TypeScript and compiles to ES5-compatible JavaScript.

## Install

The library will soon be available on NPM. Stay tuned.

## License

MIT © [Benjamin Winterberg](http://winterbe.com)
