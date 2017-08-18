# Sequency [![Travic CI](https://travis-ci.org/winterbe/sequency.svg?branch=master)](https://travis-ci.org/winterbe/sequency)

> Functional sequences for processing iterable data in JavaScript

```ts
const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

## Install

```bash
npm install sequency
```

## License

MIT © [Benjamin Winterberg](http://winterbe.com)
