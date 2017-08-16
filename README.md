# Sequence [![Travic CI](https://travis-ci.org/winterbe/sequence.svg?branch=master)](https://travis-ci.org/winterbe/sequence)

> Type-safe functional sequences for lazy collection processing in JavaScript.

```ts
const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

The API of this library is heavily inspired by [Kotlin](https://kotlinlang.org/) [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/). It's written in TypeScript and compiled to ES5-compatible JavaScript.

## Install

The library will soon be available on NPM. Stay tuned.

## License

MIT © [Benjamin Winterberg](http://winterbe.com)
