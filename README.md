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
              Return a new array with the item at the index specified moved to the chosen index.

  ```javascript
  const input = ["a", "b", "c", "d", "e", "f"];

  const result = alter(input).byMovingItemAtIndex(0).toIndex(2);

  expect(result).toEqual(["b", "c", "a", "d", "e", "f"]);
  ```

     </p>
    </details>
    
    <details>
          <summary><a href="#"><code>byRemovingDuplicates</code></a></summary>
          <p>
              <br/>          
              Create a new array with any duplicates from the original removed.

  ```javascript
  const input1 = [1, 1, 2, 1];
  const input2 = [1, "1"];
  const input3 = [[42], [42]];
    
  const result1 = alter(input1).byRemovingDuplicates();
  const result2 = alter(input2).byRemovingDuplicates();
  const result3 = alter(input3).byRemovingDuplicates();
    
  expect(result1).toEqual([1, 2]);
  expect(result2).toEqual([1, "1"]); 
  expect(result3).toEqual([[42]]);
  ```

     </p>
    </details>
    
    <details>
          <summary><a href="#"><code>byRemovingItemsBetweenIndex</code></a></summary>
          <p>
              <br/>          
              Create a new array with all items between the two indexes removed.

  ```javascript
  const input = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const result = alter(input).byRemovingItemsBetweenIndex(2).andIndex(3);

  expect(result).toEqual([1, 2, 6, 7, 8]);
  ```

     </p>
    </details>

    <details>
          <summary><a href="#"><code>byRemovingItemsEqualTo</code></a></summary>
          <p>
              <br/>          
              Create a new array with any items matching those supplied removed.

  ```javascript
  const input = [1, 2, 1, 3, 4];
  
  const result = alter(input).byRemovingItemsEqualTo([1, 2]);

  expect(result).toEqual([3, 4]);
  ```

     </p>
    </details>

- `findItemsIn`
    <details>
          <summary><a href="#"><code>containedIn</code></a></summary>
          <p>
              <br/>          
              Create a new array containing only items that are present in both the first and second array.

  ```javascript
  const input1 = [1, 2, 3, 4];
  const input2 = [7, 6, 5, 4, 3];
  
  const result = findItemsIn(input1).containedIn(input2);
  
  expect(result).toEqual([3, 4]);
  ```

     </p>
    </details>

    <details>
          <summary><a href="#"><code>notContainedIn</code></a></summary>
          <p>
              <br/>          
              Create a new array containing only items from the first array that are not present in second array.

  ```javascript
  const input1 = [1, 2, 3, 4];
  const input2 = [7, 6, 5, 4, 3];
  
  const result = findItemsIn(input1).notContainedIn(input2);
  
  expect(result).toEqual([1, 2]);
  ```

     </p>
    </details>

    <details>
          <summary><a href="#"><code>thatAreUnique</code></a></summary>
          <p>
              <br/>          
              Create a new array containing items that are only present in one of the two input arrays.

  ```javascript
  const input1a = [1, 2, 3, 4];
  const input1b = [7, 6, 5, 4, 3];

  const result = findItemsIn(input1a).and(input1b).thatAreUnique();

  expect(result).toEqual([1, 2, 7, 6, 5]);
  ```

     </p>
    </details>

- `from`
    <details>
    <summary><a href="#"><code>pickQuantity</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>fromTheStart</code></a></summary>
       <p>
       <br/>          
       Create a new array containing the first N number of items from the input array.
           
       ```javascript
       const input = ["foo", "bar", "baz"];

       const result = from(input).pickQuantity(2).fromTheStart();
       
       expect(result).toEqual(["foo", "bar"]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>fromTheEnd</code></a></summary>
       <p>
       <br/>          
       Create a new array containing the last N number of items from the input array.
           
       ```javascript
       const input = ["foo", "bar", "baz"];
       
       const result = from(input).pickQuantity(2).fromTheEnd();
       
       expect(result).toEqual(["bar", "baz"]);
       ```

       </p>
       </details>

     </p>
    </details>
    
    <details>
    <summary><a href="#"><code>pickWhile</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>fromTheStart</code></a></summary>
       <p>
       <br/>          
       Create a new array by selecting items from the start of the input array until the predicate returns false.
           
       ```javascript
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .pickWhile((n) => n !== 4)
          .fromTheStart();

        expect(result).toEqual([1, 2, 3]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>fromTheEnd</code></a></summary>
       <p>
       <br/>          
       Create a new array by selecting items from the end of the input array until the predicate returns false.
           
       ```javascript
        const input = [1, 2, 3, 4, 3, 2, 1];

        const result = from(input)
          .pickWhile((n) => n !== 4)
          .fromTheEnd();

        expect(result).toEqual([3, 2, 1]);
       ```

       </p>
       </details>

     </p>
    </details>

    <details>
    <summary><a href="#"><code>pickFirst</code></a></summary>
    <p>           
    <br/>          
    Return the first item from the input array.
                
    ```javascript
    const result = from(["fi", "fo", "fum"]).pickFirst();
    
    expect(result).toBe("fi");
    ```
     
    </p>
    </details>
    
    <details>
    <summary><a href="#"><code>pickLast</code></a></summary>
    <p>           
    <br/>          
    Return the last item from the input array.
                
    ```javascript
    const result = from(["fi", "fo", "fum"]).pickLast();
    
    expect(result).toBe("fum");
    ```
     
    </p>
    </details>
    
    <details>
    <summary><a href="#"><code>dropQuantity</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>fromTheStart</code></a></summary>
       <p>
       <br/>          
       Create a new array containing all items from the input array with the first N items removed.
           
       ```javascript
        const input = ["foo", "bar", "baz"];

        const result = from(input).dropQuantity(2).fromTheStart();

        expect(result).toEqual(["baz"]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>fromTheEnd</code></a></summary>
       <p>
       <br/>          
       Create a new array containing all items from the input array with the last N items removed.
           
       ```javascript
       const input = ["foo", "bar", "baz"];
       
       const result = from(input).dropQuantity(2).fromTheEnd();

       expect(result).toEqual(["foo"]);
       ```

       </p>
       </details>

     </p>
    </details>

    <details>
    <summary><a href="#"><code>dropWhile</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>fromTheStart</code></a></summary>
       <p>
       <br/>          
       Create a new array by removing items from the start of the input array until the predicate returns false.
           
       ```javascript
       const input = [1, 2, 3, 4, 3, 2, 1];
        
       const result = from(input)
         .dropWhile((n) => n <= 2)
         .fromTheStart();

       expect(result).toEqual([3, 4, 3, 2, 1]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>fromTheEnd</code></a></summary>
       <p>
       <br/>          
       Create a new array by removing items from the end of the input array until the predicate returns false.
           
       ```javascript
       const input = [1, 2, 3, 4, 3, 2, 1];

       const result = from(input)
         .dropWhile((n) => n <= 3)
         .fromTheEnd();

       expect(result).toEqual([1, 2, 3, 4]);
       ```

       </p>
       </details>

     </p>
    </details>

    <details>
    <summary><a href="#"><code>dropFirst</code></a></summary>
    <p>           
    <br/>          
    Create a new array containing every item from the input array except the first.
                
    ```javascript
    const result = from(["fi", "fo", "fum"]).dropFirst();
    
    expect(result).toEqual(["fo", "fum"]);
    ```
     
    </p>
    </details>
    
    <details>
    <summary><a href="#"><code>dropLast</code></a></summary>
    <p>           
    <br/>          
    Create a new array containing every item from the input array except the last.
                
    ```javascript
    const result = from(["fi", "fo", "fum"]).dropLast();
          
    expect(result).toEqual(["fi", "fo"]);
    ```
     
    </p>
    </details>

    <details>
    <summary><a href="#"><code>dropConsecutiveRepeats</code></a></summary>
    <p>           
    <br/>          
    Create a new array containing every item from the input array with any consecutively repeated elements removed.
                
    ```javascript
    const input = [1, 1, 1, 2, 3, 4, 4, 2, 2];

    const result = from(input).dropConsecutiveRepeats();

    expect(result).toEqual([1, 2, 3, 4, 2]);
    ```
     
    </p>
    </details>

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
