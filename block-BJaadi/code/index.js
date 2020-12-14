// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
console.log(
numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(
numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(
strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(
  strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
console.log(
strings.filter((string) => string.includes("is")));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(
  strings.filter((string) => string.indexOf("is") !== -1));

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(
numbers.every((num) => num % 3 === 0)
);
// -  Sort Array from smallest to largest
console.log(
[...numbers].sort((a,b) => a - b));
console.log(
[...strings].sort());

// - Remove the last word in strings
console.log(
[...strings].pop() );

// - Find largest number in numbers
console.log(
numbers.reduce((acc, num) => num > acc ? num : acc
,numbers[0]));

// - Find longest string in strings
console.log(
strings.reduce((acc, string) => string.length > acc.length ? string : acc 
, strings[0]));

// - Find all the even numbers
console.log(
numbers.filter((num) => num % 2 === 0));

// - Find all the odd numbers
console.log(
  numbers.filter((num) => num % 2 !== 0));

// - Place a new word at the start of the array use (upshift)
strings.unshift("newWord");

// - Make a subset of numbers array [18,9,7,11]
console.log(
numbers.slice(numbers.indexOf(18), numbers.indexOf(18) + 4));

// - Make a subset of strings array ['a','collection']
console.log(
strings.slice(strings.indexOf('a'), strings.indexOf('a') + 2));
// - Replace 12 & 18 with 1221 and 1881
let numReplace = numbers.map((num) => {
  if(num == 12) {
    return 1221;
  } else if(num == 18) {
    return 1881;
  } else {
    return num;
  }  
})
console.log(numReplace);
// - Replace words in strings array with the length of the word
let strLength = strings.map((str) => str.length);
console.log(strLength);

// - Find the sum of the length of words using above question
console.log(
strLength.reduce((acc,len) => acc+len
,0));
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let firstnameStartsWithJ = customers.filter(customer => customer.firstname[0] === "J");
console.log(firstnameStartsWithJ);
// - Create new array with only first name
let customersFirstNames = customers.map(customer => customer.firstname);
console.log(customersFirstNames);

// - Create new array with all the full names (ex: "Joe Blogs")
let customersFullNames = customers.map(customer =>`${customer.firstname} ${customer.lastname}`);
console.log(customersFullNames);
// - Sort the array created above alphabetically
console.log([...customersFullNames].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
let userVowel = customers.filter(customer => customer.firstname.toLowerCase().includes("a") ||
                                             customer.firstname.toLowerCase().includes("e") || 
                                             customer.firstname.toLowerCase().includes("i") ||
                                             customer.firstname.toLowerCase().includes("o") ||
                                             customer.firstname.toLowerCase().includes("o") 
);
console.log(userVowel);