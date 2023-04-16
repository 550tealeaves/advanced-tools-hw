//VARIABLE NAMING RULES
//Can't be reserved keyword (if, var, const, let)
//should be meaningful (no a, x5, tr2)
//can't start w/ a number
//no spaces or hyphens
//case sensitive - use camelCase 
//declare each variable on separate lines

let firstName = 'Mosh';
let lastName = 'Hamedani';

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate); //let allows you to reassign variable

// const interestRate2 = 0.3;
// interestRate2 = 1;
// console.log(interestRate2); //error b/c cannot reassign a constant


//2 DATA TYPES: PRIMITIVE(VALUE TYPES) & REFERENCE TYPES
//PRIMITIVE
// let nameAgain = 'Moshi'; //string literal
// let age = 30; //number literal
// let isApproved = true; //boolean literal
// let firstNameAgain = undefined; //undefined (not usually used) - type of var = undefined
// let lastNameAgain = null; //null - used to clear value of variable - type of var = object

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