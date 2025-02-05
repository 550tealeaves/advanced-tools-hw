//VARIABLE NAMING RULES
// (1) Can't be reserved keyword (if, var, const, let, return)
// (2) Should be meaningful (no a, x5, tr2)
// (3) Can't start w/ a number
// (4) No spaces or hyphens
// (5) Case sensitive - use camelCase 
// (6) Declare each variable on separate lines

let firstName = 'Mosh';
let lastName = 'Hamedani';

let interestRate = 0.3;
interestRate = 1; 
console.log(interestRate); //output = 1 "let" allows you to reassign variable

const interestRate2 = 0.3;
// interestRate2 = 1 - already set
console.log(interestRate2); //error b/c cannot reassign a constant


//2 DATA TYPES: PRIMITIVE(VALUE TYPES) & REFERENCE TYPES
//PRIMITIVE
let occupation = 'technician'; //string literal
let weight = 130; //number literal
let isApproved = true; //boolean literal
let lifeGoal = undefined; //undefined (not usually used) - type of var = undefined
let travelPlans = null; //null - used to clear value of variable - type of var = object

//OBJECTS - contain multiple related variables w/ diff properties
//declare person object 
//{} = object literal - inside you add 1+ key (property)-value pairs
let person = {   
    name: 'Mosh',
    age: 30
};

//DOT NOTATION - type object.property - can see ind properties of object
person.name = 'John'; //replaced Mosh w/ John

//BRACKET NOTATION - type object[] & pass string that determines name of target property
person['name'] = 'Mary'; //replaces John w/ Mary


console.log(person); //output = age: 30, name: 'Mary'

console.log(person.name); //Mary

//ARRAYS - list of objects - ex: list of colors, list of groceries
// [] = array literal 
//each element in the array has an index, which determines position in array
let selectedColors = [
    'red',
    'blue'
];
selectedColors[2] = 'green'; //this will add a 3rd element to the array (position 2)
selectedColors[3] = 1; //adds 4th element to array (position 3) - can mix data types

console.log(selectedColors); //output - 0: 'red' 1: "blue" 2: "green" 3: 1
console.log(selectedColors[0]); //will show 1st element in array

//Array is an object = has property-value pairs - can use dot notation to see properties
console.log(selectedColors.length); // output = 4

//Can mix data types in an array
let mishmash = [
    1,
    2,
    3,
    4.5,
    5.6,
    "oh boy",
    "say it isn't so",
    true
];

console.log(mishmash[2]); //returns 3
console.log(typeof mishmash[2]); //returns number
console.log(mishmash[4]); //returns 5.6
console.log(typeof mishmash[4]); //returns number
console.log(mishmash[6]); //returns say it isn't so
console.log(typeof mishmash[6]); //returns string
console.log(mishmash[7]); //returns true
console.log(typeof mishmash[7]); //returns boolean


//Create an array of objects

let fruits = [
    {
        kind: "grape",
        color: "red",
        quantity: 12,
        tasty: true
    }, 
    {
        kind: "kiwi",
        color: "brown", 
        quantity: 98,
        tasty: true
    },
    {
        kind: "banana",
        color: "yellow",
        quantity: 2,
        tasty: false
    },
];

//console log the array
console.log(fruits);

//return every value in the array by accessing specific properties
console.log(fruits[0].kind); //returns grape
console.log(fruits[0].color); //returns red
console.log(fruits[0].quantity); //returns 12
console.log(fruits[0].tasty); //returns true

console.log(fruits[1].kind); //returns kiwi
console.log(fruits[1].color); //returns brown
console.log(fruits[1].quantity); //returns 98
console.log(fruits[1].tasty); //returns true

console.log(fruits[2].kind); //returns banana
console.log(fruits[2].color); //returns yellow
console.log(fruits[2].quantity); //returns 2
console.log(fruits[2].tasty); //returns false


//Array.filter() and arraay.map()
//Each variable type has own unique set of methods and abilities 
// [1, 2, 3, 4, 5].filter(d => d <= 2) //will return 1,2
//[1, 2, 3, 4, 5].filter(d => d > 1) //will return 2,3,4,5

peopleLocations = [
    { name: 'Paul', city: 'Denver' },
    { name: 'Robert', city: 'Denver' },
    { name: 'Ian', city: 'Boston' },
    { name: 'Cobus', city: 'Boston' },
    { name: 'Ayodele', city: 'New York' },
    { name: 'Mike', city: 'New York' },
]

console.log("pplPlaces", peopleLocations);

peopleLocations.filter(d => d.city != 'Denver')// filters and removes all objects with city Denver
console.log("filter", peopleLocations.filter);

// peopleLocations.filter(d => d.city = 'Denver')//filters and shows objects w/ city Denver
// console.log("ppl locations", peopleLocations.filter); 

//Array.map() - method for array that create a new array, populated with whatever results you specify.
peopleLocationsArray = peopleLocations.map(d => d.city) // will show only the cities for peopleLocations array - Denver, Boston, New York
console.log("mapCity", peopleLocationsArray); //results impacted by 2nd array.filter() - if active, results will only be Denver

peopleLocationsArray = peopleLocations.map(d => d.name) // will show only the names for peopleLocations array - Paul, Robert, Ian, Cobus, Ayodele, Mike
console.log("mapName", peopleLocationsArray);

peopleLocationsDate = peopleLocations.map(d => ({ ...d, date: new Date() })) //use {...} notation to copy all values of original array and to ADD NEW VALUES 
console.log("mapDate", peopleLocationsDate);



//FUNCTIONS - statements that perform task/calculation or return something
//Parameter - variable (input) given at time of function declaration
//Argument - value supplied to the parameter


//Performs a task
function greet(name, lastName) { //name is a PARAMETER (input) - only meaningful INSIDE function
    console.log('Hello ' + name + ' ' + lastName); //add ; here b/c using statement
}

//'John' = ARGUMENT - value supplied to the parameter (name) passed into function
//'Smith' = ARGUMENT - value supplied to parameter (lastName) passed into function
greet('John', 'Smith'); 

//Mary = ARGUMENT for name parameter
//Thompson = ARGUMENT for lastName parameter
greet('Mary', 'Thompson');  


//Another way to write functions with parameters
salutation = (myFirstName, myLastName) => {
    return `My first name is ${myFirstName}, and my last name is ${myLastName}.`

}

console.log(salutation);
salutation('Gordon', 'Marshall');



//functions w/ multiple parameters - can add more inputs
//will need to add arguments that correspond to the addtional parameter(s) or else will return undefined


//TYPES OF FUNCTIONS

//Calculating task function
function square(number){
    return number * number;
}

//2 = ARGUMENT passed into the number parameter for function square
//You can then set that value of square(2) to another variable 
let squaredNumber = square(2);
console.log(squaredNumber); //output = 4

// you also can declare the variable within the console log instead of calling it separately 

console.log(square(2)); //returns 4 - it calls function square, passing in argument of 2, and then displaying result in the console 
//there are 2 function calls here - square(2); & console.log();

//this function performs an action - it sends an email to the email w/ a subject and text when called
function sendEmail(emailAddress, subject, text){
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${text}`);
}

//sendEmail(); //will open email app and send undefined subject and text


// LOOPS
//instructions that repeat until a condition is met

// Use FOR loops when # of iterations is KNOWN
// Use WHILE loops when # of iterations is UNKNOWN

