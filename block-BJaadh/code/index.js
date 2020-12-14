// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called", "sentence"));

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
for(let word of strings){
  if(word.includes("is")){
    console.log(word);
  }
}

// - Find all the words that contain 'is' use string method 'indexOf'
for(let word of strings){
  if(word.indexOf("is") !== -1){
    console.log(word);
  }
}

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((num) => num % 3 === 0));

// -  Sort Array from smallest to largest
function compare(a, b){
  return a-b;
}
let sortNumbers = [... numbers].sort(compare);
let sortStrings = [... strings].sort();
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
console.log(
numbers.reduce((acc, num) => num > acc ? num : acc
,numbers[0]));
// - Find longest string in strings
console.log(
strings.reduce((acc, string) => string.length >acc.length ? string : acc
, strings[0]));

// - Find all the even numbers

let even = numbers.reduce(function(acc,num){
  if(num % 2 === 0) {
    acc += num + " "; 
  }
  return acc;
},''); 

console.log(even);

// - Find all the odd numbers

let odd = numbers.reduce(function(acc,num){
  if(num % 2 !== 0) {
    acc += num + " "; 
  }
  return acc;
},''); 

console.log(odd);

// - Place a new word at the start of the array use (unshift)
strings.unshift("newWord");
console.log(strings);

// - Make a subset of numbers array [18,9,7,11]
let subArray = numbers.slice(3, 7);
console.log(subArray);
// - Make a subset of strings array ['a','collection']
let substr = strings.slice(2, 4);
console.log(substr);
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);

// - Replace words in strings array with the length of the word
let strLength = strings.map((str) => str.length);

// - Find the sum of the length of words using above question
console.log(
strLength.reduce((acc, len)=> acc += len
,0));
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
var customersJ = customers.filter((item) => item.firstname[0] === "J");

// - Create new array with only first name
var customerFirstName = customers.map((customer) => customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
var customerFullName = customers.map((customer) => `${customer.firstname} ${customer.lastname}`);
// - Sort the array created above alphabetically
customerFullName.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let userVowel = customers.filter((customer) => customer.firstname.includes("a") || 
                                               customer.firstname.includes("e") ||
                                               customer.firstname.includes("i") ||
                                               customer.firstname.includes("o") ||
                                               customer.firstname.includes("u")
                                              );