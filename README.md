# Sequency [![Travic CI](https://travis-ci.org/winterbe/sequency.svg?branch=master)](https://travis-ci.org/winterbe/sequency)

> Functional sequences for processing iterable data in JavaScript - inspired by [Kotlin](https://kotlinlang.org/) [Sequences](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/).

```js
import {sequenceOf} from 'sequency';

const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

<p align="center">
   <i>Follow on <a href="https://twitter.com/winterbe_">Twitter</a> for Updates</i>
</p>

## Getting started

Sequency is a type-safe functional programming library for synchronous processing of iterable data such as arrays, sets and maps. It's written in TypeScript, compiles to ES5 compatible JavaScript and works in all current browsers and [Node.js](http://nodejs.org/) applications.

```bash
npm install sequency

# or

yarn add sequency
```

## API documentation

coming soon

## License

MIT © [Benjamin Winterberg](https://twitter.com/winterbe_)
