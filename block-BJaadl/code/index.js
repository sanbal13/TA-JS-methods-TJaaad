let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(acc, word) {  
    if(word.length > acc.length) {
         return word;
    }
  return acc;
}
console.log(`Longest Word is: ${words.reduce(findLongestWord, "")}`);
// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map(word => word.length));

// - Create a new array that only contains word with atleast one vowel.
let vowelWord = words.filter(word => word.toLowerCase().includes('a') ||
                                     word.toLowerCase().includes('e') ||
                                     word.toLowerCase().includes('i') ||
                                     word.toLowerCase().includes('o') ||
                                     word.toLowerCase().includes('u') 
                                    );
console.log(vowelWord);

// - Find the index of the word "rhythm"
console.log(
words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let noVowelStart = words.filter(word => word.toLowerCase().charAt(0) !== 'a' &&
                                     word.toLowerCase().charAt(0) !== 'e' &&
                                     word.toLowerCase().charAt(0) !== 'i' &&
                                     word.toLowerCase().charAt(0) !== 'o' &&
                                     word.toLowerCase().charAt(0) !== 'u' 
                                    );
console.log(noVowelStart);

// - Create a new array that contians words not ending with vowel
let noVowelEnd = words.filter(word => word.toLowerCase().charAt(word.length-1) !== 'a' &&
                                     word.toLowerCase().charAt(word.length-1) !== 'e' &&
                                     word.toLowerCase().charAt(word.length-1) !== 'i' &&
                                     word.toLowerCase().charAt(word.length-1) !== 'o' &&
                                     word.toLowerCase().charAt(word.length-1) !== 'u' 
                                    );
console.log(noVowelEnd);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(acc, num){
  return acc + num;
}
console.log(
numbers.reduce(sumArray, 0));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyByThree = numbers.map(num => num * 3);
console.log(multiplyByThree);

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
// - Create a new array that should have true for even number and false for odd numbers.
let booleanNumbers = numbers.map(num => num % 2 === 0 ? true : false);
console.log(booleanNumbers);

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?
//Yes

// - Find the sum of the numbers in the array.
let sumNumbers = numbers.reduce((acc, num) => acc + num
,0);
console.log(sumNumbers);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(numbersArray) {
   let sum = numbersArray.reduce(numberSum, 0);
   let avg = sum / numbersArray.length;
   return avg;
}
function numberSum(acc, num) {
  return acc + num;
}

console.log(`Average of numbers is ${averageNumbers(numbers)}`);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words2){
 let sum = words2.reduce(sumWordLength, 0);
 let avg = sum / words2.length;
 return avg;
}
function sumWordLength(acc, word){
  return acc + word.length;
}
let avg = averageWordLength(strings);
console.log(`Average length of words is: ${avg}`); 