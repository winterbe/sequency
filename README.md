# Sequence [![Travic CI](https://travis-ci.org/winterbe/sequence.svg?branch=master)](https://travis-ci.org/winterbe/sequence)

Type-safe functional sequences for lazy collection processing for JavaScript.

```ts
const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

> Current Status: WIP
