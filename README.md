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
import { sort } from 'crystalline/ararys'

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

sort(people)
  .firstAscendingByProperty("age")
  .thenDescendingByProperty("name");

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
    contact: { email: "baa@example.com" } 
};

merge(person1)
  .deeplyWith(person2)
  .resolvingConflicts.viaFirstObject();

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
    - `byApplyingFn`       
    - `byInsertingBetweenEachItem`
    - `byMovingItemAtIndex`
    - `byRemovingDuplicates`
    - `byRemovingItemsBetweenIndex`
    - `byRemovingItemsEqualTo`
    - <details><summary>Test</summary>
      <p>
      
      ```javascript
      print("hello world!")
      ```
      
      </p>
      </details>
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
    - `startingWith` <details>
          <p>
          Explanation
          
          ```javascript
          print("hello world!")
          ```
          
          </p>
          </details>
    - <details><summary><code>test</code></summary>
          <p>
          Description goes here...
          
          ```javascript
          print("hello world!")
          ```
          
          </p>
          </details>
    
### `arrays.alter.byApplyingFn`

Returns a new array by applying the function supplied at the given index.

<details><summary>View example</summary>
<p>

```javascript
print("hello world!")
```

</p>
</details>