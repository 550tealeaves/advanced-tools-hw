//VARIABLE NAMING RULES
//Can't be reserved keyword (if, var, const, let)
//should be meaningful (no a, x5, tr2)
//can't start w/ a number
//no spaces or hyphens
//case sensitive - use camelCase 
//declare each variable on separate lines

let firstName = 'Mosh';
let lastName = 'Hamedani';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); //let allows you to reassign variable

const interestRate2 = 0.3;
// interestRate2 = 1;
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


console.log(person);

console.log(person.name); 

//ARRAYS - list of objects - ex: list of colors, list of groceries
// [] = array literal 
//each element in the array has an index, which determines position in array
let selectedColors = [
    'red',
    'blue'
];
selectedColors[2] = 'green'; //this will add a 3rd element to the array (position 2)
selectedColors[3] = 1; //adds 4th element to array (position 3) - can mix data types

console.log(selectedColors);
console.log(selectedColors[0]); //will show 1st element in array

//Array is an object = has property-value pairs - can use dot notation to see properties
console.log(selectedColors.length);

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
console.log(typeof mishmash[6]); //retruns string
console.log(mishmash[7]); //returns true
console.log(typeof mishmash[7]); //returns boolean



//FUNCTIONS - statements that perform task/calculation
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


//functions w/ multiple parameters - can add more inputs
//will need to add arguments that correspond to the addtional parameter(s) or else will return undefined


//TYPES OF FUNCTIONS

//Calcuating task function
function square(number){
    return number * number;
}

//2 = ARGUMENT passed into the number parameter for function square
//You can then set that value of square(2) to another variable 
let squaredNumber = square(2);
console.log(squaredNumber);

// you also can declare the variable within the console log instead of calling it separately 

console.log(square(2)); //it calls function square, passing in argument of 2, and then displaying result in the console 
//there are 2 function calls here - square(2); & console.log();