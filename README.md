# Sequence

Type-safe sequence-processing of collections in TypeScript and JavaScript.

```ts
const array = sequenceOf(1, 2, 3)
    .filter(it => it > 1)
    .map(it => `num ${it}`)
    .toArray();
console.log(array); 
```

> Current Status: WIP
