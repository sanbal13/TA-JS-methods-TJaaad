Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: None
   - Return: A string with all characters in uppercase
   - Example:
     ```js
     "cat".toUpperCase()
     "CAT"

     let str = "altCampus"
     str.toUpperCase();
     "ALTCAMPUS"

     let str1 ="javaScript"
     str1.toUpperCase();
     "JAVASCRIPT"
     ```
   -`toUpperCase` converts the string to uppercase  

3. `toLowerCase`

   - Parameter: None
   - Return: A string with all characters in lowercase
   - Example:
     ```js
     "Lion".toLowerCase()
     "lion"

     let str = "altCampus"
     str.toLowerCase();
     "altcampus"

     let str1 ="javaScript"
     str1.toLowerCase();
     "javascript"
     ```
   -`toLowerCase` converts the string to uppercase  
     
4. `trim`

   - Parameter: None
   - Return: A string without any whitespaces at the begining and end
   - Example:
     ```js
      let str1 = "    Hello    ";
      str1.trim();
      "Hello"
      let str2 ="   Happy Tummy  ";
      str2.trim();
      "Happy Tummy"
      let str3 = "Hi    ";
      str3.trim();
      "Hi"
     ```
   -`trim` removes all whitespaces from the begining as well as end of the string.
     
5. `trimEnd`

   - Parameter: None
   - Return: A string without any whitespaces at the  end
   - Example:
     ```js
      let str1 = "    Hello    ";
      str1.trimEnd();
      "    Hello"
      let str2 ="   Happy Tummy  ";
      str2.trimEnd();
      "   Happy Tummy"
      let str3 = "Hi    ";
      str3.trimEnd();
      "Hi"
     ```
   -`trim` removes all whitespaces from the end of the string.
     
6. `trimStart`

   - Parameter: None
   - Return: A string without any whitespaces at the begining.
   - Example:
     ```js
      let str1 = "    Hello    ";
      str1.trimStart();
      "Hello    "
      let str2 ="   Happy Tummy  ";
      str2.trimStart();
      "Happy Tummy  "
      let str3 = "Hi    ";
      str3.trimStart();
      "Hi    "
     ```
   -`trimStart` removes all whitespaces from the begining of the string.
     
7. `concat`

   - Parameter: string1...stringN
   - Return: new string
   - Example:
     ```js
      let str1 = "Happy";
      let str11 = "Home";
      str1.concat(str11);
      "HappyHome"

      "Alt".concat("Campus")
      "AltCampus"

      let str2 = "snow";
      str2.concat("fall");
      "snowfall"

     ```
   - `concat` concatenates the strings that are passed as parameter to the original string
     
8. `endsWith`

   - Parameter: searchString and length(optional) of string
   - Return: true or false
   - Example:
     ```js
      let str1 ="Best learning school";
      str1.endsWith("ool");
      true

      let str2 = "Best driving school";
      str2.endsWith("ing", 12); 
      true

      let str3 ="People of the city";
      str3.endsWith("of", 9);
      true
     ```
   - `endsWith` checks whether the given string ends with the search string or not. If the length option is provided then the original string is taken as of that length. 
     
9. `includes`

   - Parameter: string and position(optional)
   - Return: true or false
   - Example:
     ```js
      let str1 = "AltCampus";
      str1.includes("Campus");
      true

      let str2 = "Double Decker Bus";
      str2.includes("Bus", 10);
      true

      let str3 = "Tiger is a cat";
      str3.includes("is", 10);
      false
     ```
   - `includes` checks whether the string contains the string passed as parameter. 
     
10. `indexOf`

   - Parameter: searchString and startFrom
   - Return: index where the searchString is found
   - Example:
     ```js
      let str1 = "cat";
      str1.indexOf("at");
      1
      let str2 = "AltCampus"
      str2.indexOf("Camp", 3);
      3
      let str3 = "JavaScript";
      str3.indexOf("Script", 5);
      -1
     ```
   - `indexOf` returns the index at which the searchString first occurs. If the searchString is not found then it returns -1.
     
11. `lastIndexOf`

   - Parameter:searchString and fromIndex 
   - Return: index(number)
   - Example:
     ```js
      let str1 = "cat cat cat cat";
      str1.lastIndexOf("cat");
      12

      let str2 = "Malayalam"
      str2.lastIndexOf("a", 2);
      1

      let str3 = "is on the is on the is on the";
      str3.lastIndexOf("is", 5);
      0
     ```
   - `lastIndexOf` returns the index where the searchString is found from the last.
     
12. `padEnd`

   - Parameter: targetLength and padString
   - Return: string of length target length or original string, whichever is larger.
   - Example:
     ```js
      let str1 ="Happy";
      str1.padEnd(10, ".");
      "Happy....."

      let str2 = "AltCampus";
      str2.padEnd(5, "*");
      "AltCampus"

      let str3 = "School";
      str3.toUpperCase().padEnd(10, "$");
      "SCHOOL$$$$"
     ```
   - `padEnd` pads the padString at the end of the string calling this function and returns a string having length equal to targetLength or that of the string , whichever is greater. 
     
13. `padStart`

   - Parameter: targetLength and padString
   - Return: string of length target length or original string, whichever is larger.
   - Example:
     ```js
      let str1 ="Happy";
      str1.padStart(10, ".");
      ".....Happy"

      let str2 = "AltCampus";
      str2.padStart(5, "*");
      "AltCampus"

      let str3 = "School";
      str3.toUpperCase().padStart(10, "$");
      "$$$$SCHOOL"
     ```
   - `padStart` pads the padString at the begining of the string calling this function and returns a string having length equal to targetLength or that of the string , whichever is greater. 
     
14. `repeat`

   - Parameter: number (no. of times the string has to be repeated). It can be a value **between** 0 and infinity.
   - Return: a new string
   - Example:
     ```js
      let str1 ="Google";
      str1.repeat(5);
      "GoogleGoogleGoogleGoogleGoogle"

      let str2 = "Yahoo";
      str2.repeat(1);
      "Yahoo"

      let str3 = "Rediff";
      undefined
      str3.repeat();
      ""
     ```
   - `repeat` repeats the string the number of times specified in the parameter.
     
15. `replace`

   - Parameter: subStr and new Substr
   - Return: A new string
   - Example:
     ```js
      let str1 = "The dog is brown in colour.";
      str1.replace("dog", "monkey");
      "The monkey is brown in colour."

      let str2 = "The dog is black in color. The dog swims";
      str2.replace("dog", "monkey");
      "The monkey is black in color. The dog swims"

      let str3 = "The dog is black in color. The dog swims";
      str3.replace(/dog/g, 'monkey');
      "The monkey is black in color. The monkey swims"
     ```
   - `replace` replaces the first occurance of a subStr with a new substr. If all the occurance are to be replaced use regular expression.
     
16. `slice`

   - Parameter: beginIndex and endIndex
   - Return: A new string
   - Example:
     ```js
      let str1 = "Knowledge is power";
      str1.slice(-5);
      "power"

      let str2 = "Family is base"
      str2.slice(7, 9);
      "is"

      let str3 = "Friends are pillars"
      str3.slice(0, 7)
      "Friends"
     ```
   -  `slice` extracts the text from string as per the beginIndex and endIndex and returns it.
     
17. `split`

   - Parameter: separator
   - Return:An array
   - Example:
     ```js
     let str1 = "Aeroplane";
      str1.split("");
      (9) ["A", "e", "r", "o", "p", "l", "a", "n", "e"]
      let str2 = "Moon is a natural satellite";
      str2.split(" ");
      (5) ["Moon", "is", "a", "natural", "satellite"]
      let str3 = "Bat is a mammal";
      str3.split();
      ["Bat is a mammal"]
     ```
   - `split` removes the separator and returns the substring as an array.
     
18. `substring`

   - Parameter: indexStart and indexEnd
   - Return: A new string
   - Example:
     ```js
      let str1 = "altCampus";
      str1.substring(3);
      "Campus"

      let str2 = "javaScript";
      str2.substring(0,4);
      "java"

      let str3 = "Watermelon";
      str3.substring(5,7);
      "me"
     ```
   - `substring` returns a part of the string between the startIndex and endIndex.
     
