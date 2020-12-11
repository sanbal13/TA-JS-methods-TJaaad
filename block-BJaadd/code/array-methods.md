Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: `separator` which is optional. It is the string used to separate adjacent elements of the array. 
   In the absence of the separator the elements are separated by `,`. 
   - Return: A string which contains all the elements of the array separated by the separator.
   - Example:
     ```js
          let arr = ["apple", "orange", "banana"];
            arr.join();
            "apple,orange,banana"
            arr.join("-");
            "apple-orange-banana"
            arr.join("%");
            "apple%orange%banana"
     ```
   - `join` creates a string that connects all the elements of an array with the separator in between them and returns the string
   - No it does not mutate the original array


3. `flat`
   - Parameter: `depth`, the depth to which the flattening is to be performed. If not specified it defaults to 0.
   - Return: An array with the subarray concatnated upto the given depth.
   - Example:
     ```js
     let arr1 =["1", "2", ["5","6"]];
      arr1.flat();
      Array(4) [ "1", "2", "5", "6" ]

      let arr2 =["1", "2", ["5","6"], ["7", "8"]];
      arr2.flat();
      Array(6) [ "1", "2", "5", "6", "7", "8" ]

      let arr3 =["1", "2", [[["5","6"]]], ["7", "8"]];
      arr3.flat(2);
      Array(5) [ "1", "2", (2) […], "7", "8" ]
     ```
   - `flat` creates an array by concating the subarray to the array upto the said depth.
   -  No it does not mutate the original array

4. `push`
   - Parameter: `elements` that are added to the array  
   - Return: modified length of the array
   - Example:
     ```js
          let animal = ["cat", "dog"];
          animal.push("hen", "rat");
          4
          let language = ["Java", "JavaScript","C"];         
          language.push("C++", "Python", "Ruby");
          6
          let states = ["happy", "sad"];
          states.push("angry", "terrified");
          4
     ```
   - `push` is used to add more elements to the calling array.
   -  It mutates the original array.

5. `indexOf`
   - Parameter: searchElement and optional startIndex
   - Return: number i.e position of the element
   - Example:
     ```js
      arr.indexOf("orange")
      1
      arr1
      Array(3) [ "1", "2", (2) […] ]

      arr1.indexOf("1");
      0
      arr2
      Array(4) [ "1", "2", (2) […], (2) […] ]

      let arr4 = ["pen", "pencil", "rubber", "sharpner"];
      undefined
      arr4.indexOf("bag")
      -1
     ```
   - `indexOf` returns the first position where the search element is found. If the element is not found -1 is returned. If the start index is specified then the sear starts from that index.
   - It does not mutate the original array.

6. `lastIndexOf`
   - Parameter: searchElement and fromIndex
   - Return: number i.e. the index
   - Example:
     ```js
      let arr1 = ["cat", "dog", "rat","hen","rat", "cat", "dog"];
      arr1.lastIndexOf("dog")
      6
      arr1.lastIndexOf("rat", 3);
      2
      arr1.lastIndexOf("rat", 5);
      4
      let arr2 = [1, 2, 3, 4, 5, 3, 1];
      arr2.lastIndexOf(3);
      5
      arr2.lastIndexOf(3, 4);
      2
      arr2.lastIndexOf(5, 3);
      -1
     ```
   - `lastIndexOf` returns the last index where the searchElement is present. It starts search from the end of the array. If fromIndex is not given then it is defaulted to array.length-1
   - It does not mutate the original array.

7. `includes`
   - Parameter: valueToFind and fromIndex
   - Return: Boolean value
   - Example:
     ```js
      let arr1 =["cat", "dog", "rat", "pig"]
      arr1.includes("rat");
      true
      let arr2 = ["pen", "pencil", "rubber", "sharpner"]
      arr2.includes("pen", 1);
      false
      let arr3 =["bajaj", "tvs", "honda", "tata"];
      arr3.includes("honda", -1)
      false
     ```
   - `includes` searches if valuetoFind is present or not in an arrray and returs the boolean value.
   -  It does not mutate the original array.

8. `reverse`
   - Parameter: none
   - Return: reference to the array
   - Example:
     ```js
      let arr1 =["jam", "cheese", "butter"];
      arr1.reverse();
      Array(3) [ "butter", "cheese", "jam" ]

      let arr2 =["carrot", "brinjal", "green peas", "tomato"];
      arr2.reverse();
      Array(4) [ "tomato", "green peas", "brinjal", "carrot" ]

      let arr3 =["bike", "cycle", "auto", "bus", "train"];
      arr3.reverse();
      Array(5) [ "train", "bus", "auto", "cycle", "bike" ]
     ```
   - `reverse` reverses the order of the elements of an array
   - It mutates the original array

9. `every`
   - Parameter: callback function
   - Return: Boolean value
   - Example:
     ```js
      const isBelowThreshold = (currentValue) => currentValue < 40;
      const arr1 = [1, 39, 18, 35];
      arr1.every(isBelowThreshold);
      true
      const temperature = [55, 60,65,70,75];
      temperature.every((temp) => temp > 50);
      true
      const age = [50, 45, 61, 55];
      const ageAboveFifty = (age) => age>50;
      age.every(ageAboveFifty);
      false
     ```
   - `every` checks whether all the elements in the array passes the test designed in the callback function.
   -  It does not mutate the original array.

10. `shift`
   - Parameter: none
   - Return: the element at zeroth index
   - Example:
     ```js
      const arr1 =["cat","rat","mat"];
      arr1.shift();
      "cat"
      let arr2 =["red", "green", "black", "orange"];
      arr2.shift();
      "red"
      var arr3 = [true, false, undefined, NaN];
      arr3.shift();
      true
     ```
   - `shift` removes the element at the 0 index and returns it and the remaining element shifts one place down.
   - It mutates the original array.

11. `splice`
   - Parameter: start, delete, (item1, item2,...)
   - Return: an array containing the deleted items
   - Example:
     ```js
      let arr1 = ["car", "cycle", "bus", "train"];
      arr1.splice(2, 2, "truck", "tempo");
      Array [ "bus", "train" ]

      let arr2 = ["Arti", "Abhishek", "Ravindra", "Ayush"];
      arr2.splice(0, 4, "Prashant", "Abhishek", "Ankit");
      Array(4) [ "Arti", "Abhishek", "Ravindra", "Ayush" ]

      let arr3 = ["carrom", "chess", "ludo", "snake and laders"];
      arr3.splice(4, 0, "blocks", "sudoku");
      Array []
     ```
   - `splice` deletes some element from the array and replaces it by a new set of elements
   -  It mutates the original array

12. `find`
   - Parameter: callbackFunction 
   - Return: the first element of the array that satisfies the test in the callback function
   - Example:
     ```js
      arr1 =["table", "chair", "desk", "bench"];
      search = arr1.find((item) => item.charAt(0) === 'd');
      console.log(search);
      desk 
      let arr2 =[4, 5, 8, 10, 7];
      search =arr2.find((item) => item % 2 !== 0);
      console.log(search);
      5 
      arr3 = [3, true, undefined, "table", NaN, "pen"];
      search = arr3.find((item) => typeof(item) === "string");
      "table"
     ```
   - `find` method tests the elements of the array from the 0th index for the test specified in the callback function and as soon as any element clears the test, it is returned. If no element clears the test `undefined ` is returned. 
   - It does not mutate the original array . The callback function that is passed to the function can mutate the function.

13. `unshift`
   - Parameter: elementN
   - Return: length of the array
   - Example:
     ```js
      let arr1 = [1, 2, 3];
      arr1.unshift(0);
      4
      let arr2 = ['b', 'c', 'd'];
      arr2.unshift('a');
      4
      let arr3 = ['5', '7', '11'];
      arr3.unshift('2', '3');
      5
     ```
   - `unshift` adds the elements that are passed as parameter to the begining of the array. The index of the original elements of the array is increased by the number of new elements that are added.
   - It mutates the original array.

14. `findIndex`
   - Parameter: callback fuunction
   - Return: index of first element that satisfies the test
   - Example:
     ```js
      let arr1 = [13, 10, 20, 25, 21];
      arr1.findIndex((item) => item > 20);
      3
      let arr2 = ["car", "tempo", "truck", "bus"];
      arr2.findIndex((item) => item.charAt(1)==='u');
      3
      let arr3 = [NaN, undefined, 0, 1, 1, true];
      arr3.findIndex((item) => item);
      3
     ```
   - `findindex` gives the index of the first element of the array that passes the test in the callback function. If no element passes the test it returns -1. 
   - It does not mutate the original array.

15. `filter`
   - Parameter: callback function
   - Return: A new array 
   - Example:
     ```js
     let arr1 = [1, 2, 3, 4, 5, 6];
      arr1.filter((item) => item %2 == 0);
      Array(3) [ 2, 4, 6 ]

      arr2 = ["bus", "car", "taxi"]     
      arr2.filter((item) => item.endsWith("xi"));
      Array [ "taxi" ]

      let arr3 =[10, 20, 31, 40, 52];
      arr3.filter((item) => item % 10 === 0);
      Array(3) [ 10, 20, 40 ]
     ```
   - `filter` tests all the elements in the array inside the callback function and returns a new array containing all the elements that has passed the test.
   - It does not mutate the original array.

16. `flat`
   - Parameter: depth(optional) defaults to 1. 
   - Return:A new array
   - Example:
     ```js
      let arr1 =["cat", "rat", "dog", ["lion", "tiger"]];
      arr1.flat();
      Array(5) [ "cat", "rat", "dog", "lion", "tiger" ]

      let arr2 = [1, 2, [3, 4, [5, 6]]];
      arr2.flat();
      Array(5) [ 1, 2, 3, 4, [5, 6] ]

      let arr3 = [1, 2, [3, 4, [5, 6,[7, 8]]]]
      arr3.flat(3);
      Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
     ```
   - `flat` concatenates the elements of the subarray to the main array till the specified depth and returns a new array.
   - It does not mutate the original array.

17. `forEach`
   - Parameter: callback function
   - Return: undefined
   - Example:
     ```js
     let arr1 =["camel", "giraffe", "elephant", "lion"]
     arr1.forEach((item) => console.log(item));

     let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
      arr2.forEach(function(item) {
        if(item % 2 == 0) {
          console.log(`${item} is even`);
        } else {
          console.log(`${item} is odd`);
        }
      } );

      let arr3 = ["Jan", "Feb", "Mar", "Apr", "May", "June"]
      arr3.forEach((item) => console.log(`${item} starts with ${item.charAt(0)}`));
     ```
   - `forEach` executes the callback function for every element in the array and it always return undefined.
   -  It does not mutate the original array.

18. `map`
   - Parameter: callback function 
   - Return: A new array 
   - Example:
     ```js
     let arr1 = [1, 2, 3, 4, 5]
     arr1.map((item) => item * 2);
     Array(5) [ 2, 4, 6, 8, 10 ]

     let arr2 = ["Blue", "Grey", "Brown"]
     arr2.map((item) => "Dark"+item.toLowerCase());
     Array(3) [ "Darkblue", "Darkgrey", "Darkbrown" ]

     let arr3 = ['a', 'e', 'i', 'o', 'u']
     arr3.map((item) => `${item} is a vowel`)
     Array(5) [ "a is a vowel", "e is a vowel", "i is a vowel", "o is a vowel", "u is a vowel" ]
     ```
   - `map` executes the callback function for each and every element of the array and returns a new array containing the result of callback function.
   - It does not mutate the original array.

19. `pop`
   - Parameter: None 
   - Return: last element of an array
   - Example:
     ```js
      let arr1 = [1, 2, 3, 4, 5];
      arr1.pop();
      5

      let arr2 = ["carrom", "cards", "ludo", "scrabble"]
      arr2.pop()
      "scrabble"

      let arr3 = [true, 1, 22, "cat", false]
      arr3.pop();
      false
     ```
   - `pop` removes the last element from the array and returns it.
   - It mutates the original array

20. `reduce`
   - Parameter:callback function and initialValue
   - Return: Single value as a result of reduction
   - Example:
     ```js
      let arr1 = [1, 2, 3, 4, 5];
      arr1.reduce((acc, item) => {
                  return acc*item;
                  },1);
      120

      let arr2 =["orange","red", "brown", "pink"]
      arr2.reduce(function(acc, item) {
                  return acc + item + " ";
                  },"")
      "orange red brown pink "

      let arr3 = ["apple", "orange", "banana", "strawberry", "chikoo"]
      arr3.reduce(function count(acc, item) { 
      return acc+1;},0);
      5
     ```
   - `reduce` reduces the items in an array into a single value using the reducing function passed as a callback function. 
   - It does not nutate the original function.

21. `slice`
   - Parameter: start , end
   - Return: a new array
   - Example:
     ```js
      let arr1 =["India", "Nepal", "Bhutan", "China", "US","UK"]
      arr1.slice(0, 4);
      Array(4) [ "India", "Nepal", "Bhutan", "China" ]

      let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      arr2.slice();
      Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

      arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      arr2.slice(4);
      Array(5) [ 5, 6, 7, 8, 9 ]
     ```
   - `slice` returns the shallow copy of a part of original array.    
   -  It does not mutate the original array

22. `some`
   - Parameter: callback function 
   - Return: true or false
   - Example:
     ```js
      let arr1 = ["WiFi", "Hotspot", "Broadband", "BlueTooth"]
      arr1.some(startsWithB);
      function startsWithB(feature) {
        return feature.charAt(0) === 'B';
      }
      true
      let arr2 = [20, 23, 45, 18, 7]
      arr2.some((item) => item <10);
      true
      let arr3 = [20, 23, 45, 18, 17]
      arr3.some((item) => item < 10);
      false
     ```
   - `some` checks for elements of the array to pass the test in the callback function and if any one of the element passes the test it returns true else it returns false.  
   - It does not mutate the original array.

