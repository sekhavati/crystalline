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
    <details>
    <summary><a href="#"><code>ascendingByProperty</code></a></summary>
    <p>           
    <br/>          
    Create a new array with items from the input array sorted in ascending order by the given property.
                
    ```javascript
    const input = [
      { name: "Emma", age: 70 },
      { name: "Peter", age: 78 },
      { name: "Mikhail", age: 62 },
    ];

    const result = sort(input).ascendingByProperty("age");

    expect(result).toEqual([
      { name: "Mikhail", age: 62 },
      { name: "Emma", age: 70 },
      { name: "Peter", age: 78 },
    ]);
    ```
     
    </p>
    </details>

    <details>
    <summary><a href="#"><code>descendingByProperty</code></a></summary>
    <p>           
    <br/>          
    Create a new array with items from the input array sorted in descending order by a given property.
                
    ```javascript
    const input = [
      { name: "Emma", age: 70 },
      { name: "Peter", age: 78 },
      { name: "Mikhail", age: 62 },
    ];

    const result = sort(input).descendingByProperty("age");

    expect(result).toEqual([
      { name: "Peter", age: 78 },
      { name: "Emma", age: 70 },
      { name: "Mikhail", age: 62 },
    ]);
    ```
     
    </p>
    </details>

    <details>
    <summary><a href="#"><code>firstAscendingByProperty</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>thenAscendingByProperty</code></a></summary>
       <p>
       <br/>          
       Create a new array with items from the input array sorted in ascending order by the first property, then ascending by the second property.
           
       ```javascript
       const alice = {
         name: "alice",
         age: 40,
       };
       const bob = {
        name: "bob",
        age: 30,
       };
       const clara = {
         name: "clara",
         age: 40,
       };
        
       const input = [alice, bob, clara];
        
       const result = sort(input)
         .firstAscendingByProperty("age")
         .thenAscendingByProperty("name");
        
       expect(result).toEqual([bob, alice, clara]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>thenDescendingByProperty</code></a></summary>
       <p>
       <br/>          
       Create a new array with items from the input array sorted in ascending order by the first property, then descending by the second property.
           
       ```javascript
       const alice = {
         name: "alice",
         age: 40,
       };
       const bob = {
         name: "bob",
         age: 30,
       ;
       const clara = {
         name: "clara",
         age: 40,
       };
       
       const input = [clara, bob, alice];
       
       const result = sort(input)
         .firstAscendingByProperty("age")
         .thenDescendingByProperty("name");
       
       expect(result).toEqual([bob, clara, alice]);
       ```

       </p>
       </details>

     </p>
    </details>

    <details>
    <summary><a href="#"><code>firstDescendingByProperty</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>thenAscendingByProperty</code></a></summary>
       <p>
       <br/>          
       Create a new array with items from the input array sorted in descending order by the first property, then ascending by the second property.
           
       ```javascript
       const alice = {
         name: "alice",
         age: 40,
       };
       const bob = {
         name: "bob",
         age: 30,
       };
       const clara = {
         name: "clara",
         age: 40,
       };
       
       const input = [clara, bob, alice];

       const result = sort(input)
         .firstDescendingByProperty("age")
         .thenAscendingByProperty("name");

       expect(result).toEqual([alice, clara, bob]);
       ```

       </p>
       </details>
     
     - <details>
       <summary><a href="#"><code>thenDescendingByProperty</code></a></summary>
       <p>
       <br/>          
       Create a new array with items from the input array sorted in descending order by the first property, then descending by the second property.
           
       ```javascript
       const alice = {
         name: "alice",
         age: 40,
       };
       const bob = {
         name: "bob",
         age: 30,
       };
       const clara = {
         name: "clara",
         age: 40,
       };
       
       const input = [clara, bob, alice];

       const result = sort(input)
         .firstDescendingByProperty("age")
         .thenDescendingByProperty("name");

       expect(result).toEqual([clara, alice, bob]);
       ```

       </p>
       </details>

     </p>
    </details>

- `split`
    <details>
    <summary><a href="#"><code>atFirstEncounterOf</code></a></summary>
    <p>           
    <br/>          
    Create a new array that contains two arrays after splitting the original at the first point where the predicate holds true.
                
    ```javascript
    const input = [1, 2, 3, 1, 2, 3];

    const result = split(input).atFirstEncounterOf((n) => n === 2);

    expect(result).toEqual([[1], [2, 3, 1, 2, 3]]);
    ```
     
    </p>
    </details>

    <details>
    <summary><a href="#"><code>atIndex</code></a></summary>
    <p>           
    <br/>          
    Create a new array that contains two arrays after splitting the original at the index specified.
                
    ```javascript
    const input = [1, 2, 3];
    
    const result = split(input).atIndex(1);
    
    expect(result).toEqual([[1], [2, 3]]);
    ```
     
    </p>
    </details>    
    
    <details>
    <summary><a href="#"><code>byItemsSatisfying</code></a></summary>
    <p>           
    <br/>          
    Create a new array that contains two arrays after separating the contents of the original into items that satisfy the predicate and those that don't.
                
    ```javascript
    const input = ["sss", "ttt", "foo", "bars"];
    
    const result = split(input).byItemsSatisfying((n) => n.includes("s"));
    
    expect(result).toEqual([
      ["sss", "bars"],
      ["ttt", "foo"],
    ]);
    ```
     
    </p>
    </details>    
    
    <details>
    <summary><a href="#"><code>everyNthIndex</code></a></summary>
    <p>           
    <br/>          
    Create a new array that contains multiple other arrays that are the result of splitting the original every N items.
                
    ```javascript
    const input = [1, 2, 3, 4, 5, 6, 7];
    
    const result = split(input).everyNthIndex(3);
    
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    ```
     
    </p>
    </details>

- `tally`
    <details>
    <summary><a href="#"><code>atFirstEncounterOf</code></a></summary>
    <p>           
    <br/>          
    Create an object that contains a count of elements in an array according to how many match a key generated by the supplied function.
                
    ```javascript
    const input = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];

    const result = tally(input).by(Math.floor);

    expect(result).toEqual({ 1: 3, 2: 2, 3: 1 });
    ```
     
    </p>
    </details>    

## `objects`

- `alter`
    <details>
    <summary><a href="#"><code>byApplying</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>toKey</code></a></summary>
       <p>
       <br/>          
       Create a new object that is a copy of the original but with the transformation applied to the key specified.
           
       ```javascript
       const input = {
         firstName: "  Tomato ",
         data: { elapsed: 100, remaining: 1400 },
         id: 123,
       };

       const result = alter(input)
         .byApplying((n) => n.trim())
         .toKey("firstName");

       expect(result).toEqual({
         firstName: "Tomato",
         data: { elapsed: 100, remaining: 1400 },
         id: 123,
       });
       ```

       </p>
       </details>
    
     </p>
     </details> 

- `copy`
    <details>
    <summary><a href="#"><code>deeply</code></a></summary>
    <p>           
    <br/>          
    Create a deep copy of the object including any nested objects. 
                
    ```javascript
    const input = {
      a: [1, 2, 3],
      b: "foo",
      c: {
        c1: 123,
      },
    };

    const result = copy(input).deeply();

    expect(input).toEqual(result);

    // Referential checks
    expect(input !== result).toBe(true);
    expect(input.a !== result.a).toBe(true);
    expect(input.c !== result.c).toBe(true);
    ```
     
    </p>
    </details>   
    
    <details>
    <summary><a href="#"><code>discardKey</code></a></summary>
    <p>           
    <br/>          
    Create a partial copy of the object omitting the key specified. 
                
    ```javascript
    const input = { a: 1, b: 2, c: 3, d: 4 };
    
    const result = copy(input).discardKey("a");

    expect(result).toEqual({ b: 2, c: 3, d: 4 });
    ```
     
    </p>
    </details>   
    
    <details>
    <summary><a href="#"><code>discardKeys</code></a></summary>
    <p>           
    <br/>          
    Create a partial copy of the object omitting the keys specified. 
                
    ```javascript
    const input = { a: 1, b: 2, c: 3, d: 4 };
    
    const result = copy(input).discardKeys(["a", "d"]);
    
    expect(result).toEqual({ b: 2, c: 3 });
    ```
     
    </p>
    </details>   
    
    <details>
    <summary><a href="#"><code>keepKey</code></a></summary>
    <p>           
    <br/>          
    Create a partial copy of an object containing only the key specified. 
                
    ```javascript
    const input = { a: 1, b: 2, c: 3, d: 4 };
    
    const result = copy(input).keepKey("a");

    expect(result).toEqual({ a: 1 });
    ```
     
    </p>
    </details>   
    
    <details>
    <summary><a href="#"><code>keepKeys</code></a></summary>
    <p>           
    <br/>          
    Create a partial copy of an object containing only the keys specified. 
                
    ```javascript
    const input = { a: 1, b: 2, c: 3, d: 4 };

    const result = copy(input).keepKeys(["a", "c"]);

    expect(result).toEqual({ a: 1, c: 3 });
    ```
     
    </p>
    </details>   

- `merge`
    <details>
    <summary><a href="#"><code>deeplyWith</code></a></summary>
    <p>
            
     - <details>
       <summary><a href="#"><code>resolvingConflictsViaFirstObject</code></a></summary>
       <p>
       <br/>          
       Create a new object with all properties from the input objects, using values from the first object when the same keys exist in both.
           
       ```javascript
       const obj1 = {
         name: "fred",
         age: 10,
         contact: { email: "moo@example.com" },
       };
       const obj2 = { 
         age: 40, 
         contact: { email: "baa@example.com" } 
       };
  
       const result = merge(obj1)
         .deeplyWith(obj2)
         .resolvingConflicts.viaFirstObject();
  
       expect(result).toEqual({
         name: "fred",
         age: 10,
         contact: { email: "moo@example.com" },
       });
       ```

       </p>
       </details>
       
     - <details>
       <summary><a href="#"><code>resolvingConflictsViaSecondObject</code></a></summary>
       <p>
       <br/>          
       Create a new object with all properties from the input objects, using values from the second object when the same keys exist in both.
           
       ```javascript
       const obj1 = {
         name: "fred",
         age: 10,
         contact: { email: "moo@example.com" },
       };
       const obj2 = { 
         age: 40, 
         contact: { email: "baa@example.com" } 
       };
  
       const result = merge(obj1)
         .deeplyWith(obj2)
         .resolvingConflictsViaSecondObject();
  
       expect(result).toEqual({
         name: "fred",
         age: 40,
         contact: { email: "baa@example.com" },
       });
       ```

       </p>
       </details>

     - <details>
       <summary><a href="#"><code>resolvingConflictsViaFn</code></a></summary>
       <p>
       <br/>          
       Create a new object with all properties from the input objects, using the resolver function to derive a value for keys that exist in both.
           
       ```javascript
       const obj1 = { a: true, c: { values: [10, 20] } };
       const obj2 = { b: true, c: { values: [15, 35] } };
  
       const result = merge(obj1)
         .deeplyWith(obj2)
         .resolvingConflictsViaFn((x, y) => [...x, ...y]);
  
       expect(result).toEqual({
         a: true,
         b: true,
         c: { values: [10, 20, 15, 35] },
       });
       ```

       </p>
       </details>
    
     </p>
     </details> 

## `strings`

## `numbers`

- `clamp`

## `misc`

- `sequence-from`
  - `startingWith`
