# crystalline

# Overview

This library contains a collection of utility functions with a strong emphasis on readability.

Inspired by [Jest Matchers](https://jestjs.io/docs/en/using-matchers).

# Installation

```shell script
npm install crystalline
```

```shell script
yarn add crystalline
```

# Examples

This example demonstrates sorting an array of objects - first by one property, then by another:

```javascript
import { sort } from "crystalline/ararys";

const people = [
  {
    name: "alice",
    age: 40,
  },
  {
    name: "bob",
    age: 30,
  },
  {
    name: "clara",
    age: 40,
  },
];

sort(people).firstAscendingByProperty("age").thenDescendingByProperty("name");

// =>
// [
//   {
//     name: "bob",
//     age: 30,
//   },
//   {
//     name: "clara",
//     age: 40,
//   },
//   {
//     name: "alice",
//     age: 40,
//   }
// ]
```

This example demonstrates merging two objects - using values from the first object when the same keys exist in both:

```javascript
const person1 = {
  age: 10,
  contact: { email: "moo@example.com" },
};

const person2 = {
  name: "bob",
  age: 40,
  contact: { email: "baa@example.com" },
};

merge(person1).deeplyWith(person2).resolvingConflicts.viaFirstObject();

// result:
// {
//     name: "bob",
//     age: 10,
//     contact: { email: "moo@example.com" },
// }
```

# API

## `arrays`

- `alter`
    <details>
          <summary><a href="#"><code>byApplyingFn</code></a></summary>
          <p>
              <br/>          
              Create a new array by applying the function supplied at the given index.

  ```javascript
  const input = ["a", "b", "c", "d"];

  const result = alter(input)
    .byApplyingFn((n) => n.toUpperCase())
    .atIndex(1);

  expect(result).toEqual(["a", "B", "c", "d"]);
  ```

     </p>
    </details>
    
    <details>
          <summary><a href="#"><code>byInsertingBetweenEachItem</code></a></summary>
          <p>
              <br/>          
              Create a new array with the value supplied inserted between each item.

  ```javascript
  const input = ["b", "n", "n", "s"];

  const result = alter(input).byInsertingBetweenEachItem("a");

  expect(result).toEqual(["b", "a", "n", "a", "n", "a", "s"]);
  ```

     </p>
    </details>
    
    <details>
          <summary><a href="#"><code>byMovingItemAtIndex</code></a></summary>
          <p>
              <br/>          
              Return a new array with the item at the index specified moved to the chosen index

  ```javascript
  const input = ["a", "b", "c", "d", "e", "f"];

  const result = alter(input).byMovingItemAtIndex(0).toIndex(2);

  expect(result).toEqual(["b", "c", "a", "d", "e", "f"]);
  ```

     </p>
    </details>    
    
    - `byRemovingDuplicates`
    - `byRemovingItemsBetweenIndex`
    - `byRemovingItemsEqualTo`

- `find-items-in`
  - `containedIn`
  - `notContainedIn`
  - `thatAreUnique`
- `from`
  - `pickQuantity`
  - `pickWhile`
  - `pickFirst`
  - `pickLast`
  - `dropQuantity`
  - `dropWhile`
  - `dropFirst`
  - `dropLast`
  - `dropConsecutiveRepeats`
- `sort`
  - `ascendingByProperty`
  - `descendingByProperty`
  - `firstAscendingByProperty`
  - `firstDescendingByProperty`
- `split`
  - `atFirstEncounterOf`
  - `atIndex`
  - `byItemsSatisfying`
  - `everyNthIndex`
- `tally`
  - `by`

## `objects`

- `alter`
  - `byApplying`
- `copy`
  - `deeply`
  - `discardKey`
  - `discardKeys`
  - `keepKey`
  - `keepKeys`
- `merge`
  - `deeplyWith`

## `strings`

## `numbers`

- `clamp`

## `misc`

- `sequence-from`
  - `startingWith`

### `arrays.alter.byApplyingFn`

Returns a new array by applying the function supplied at the given index.

<details><summary>View example</summary>
<p>

```javascript
print("hello world!");
```

</p>
</details>
