let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person) => person.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => person.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((nam) => nam[0] ===  'J' || nam[0] === 'P'));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((nam) => nam[0] ===  'A' || nam[0] === 'C').map((nam) => nam.length));

// Log all the filtered male ('M') in persons array
console.log(persons.filter((person) => person.sex === 'M'));

// Log all the filtered female ('F') in persons array
console.log(persons.filter((person) => person.sex === 'F'));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person) => person.sex === 'F' && (person.name[0]==='C' || person.name[0]==='J')));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((grade) => grade % 2 == 0));

// Find the first name that starts with 'J' in persons array and log the object
let firstNameWithJ = persons.find((person) => person.name.charAt(0) === 'J').name;
console.log(persons.find((person) => person.name === firstNameWithJ));

// Find the first name that starts with 'P' in persons array and log the object
let firstNameWithP = persons.find((person) => person.name.charAt(0) === 'P').name;
console.log(persons.find((person) => person.name === firstNameWithP));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let firstNameWithJGrade10F = persons.find((person) => person.name.charAt(0) === 'J' && person.grade > 10 && 
                                                      person.sex === 'F' ).name;
console.log(persons.find((person) => person.name === firstNameWithJGrade10F));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === 'F');
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === 'M');
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0); 
// Find the average grade
 let averageGrade = gradeTotal/peopleGrade.length;

// Find the average grade of male
console.log(
  malePersons.reduce((acc, person) => {
    return acc + person.grade;
  },0) / malePersons.length
);

// Find the average grade of female
console.log(
  femalePersons.reduce((acc, person) => {
    return acc + person.grade;
  },0) / femalePersons.length
);

// Find the highest grade
console.log(
persons.reduce((acc,person) => {
  return person.grade > acc ? person.grade : acc
}, 0));

// Find the highest grade in male
console.log(
  malePersons.reduce((acc,person) => {
    return person.grade > acc ? person.grade : acc
  }, 0));

// Find the highest grade in female
console.log(
  femalePersons.reduce((acc,person) => {
    return person.grade > acc ? person.grade : acc
  }, 0));
// Find the highest grade for people whose name starts with 'J' or 'P'
console.log(
  persons.reduce((acc,person) => {
    if(person.name[0] == 'J' || person.name[0] == 'P'){
    return person.grade > acc ? person.grade : acc
    } else {
      return acc;
    }
  }, 0));

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
//console.log(peopleGrade.sort((a,b) => a - b));

// Sort the peopleGrade in descending order
//console.log(peopleGrade.sort((a,b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b) => b - a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log([...peopleName].sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort().reverse());