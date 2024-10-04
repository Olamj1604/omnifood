'use strict';

//ESLINT

// ES5
// Declaring variables
var firstname = 'Julius'; // string value

var lastname = 'Juwon';

function logger() {
    console.log(x); // udefined Hoisting
    var x = 10;
    console.log(x); //10
}

logger();



function example() {
    if (true) {
        let x = 10;
        x = 7;
        x = 20;
        console.log(x);
    }
}

example();


//function

//Function Declaration
function myName(firstName, secondName, thirdName) {
    const firstStudent = `My name is ${firstName}`;
    const secondStudent = `My name is ${secondName}`;
    const thirdStudent = `My name is ${thirdName}`;
    console.log(firstName, secondName, thirdName);
}

myName('Moses', 'Dare', 'Peter'); // invoking a function name

// function expression
const calcAge = function(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge(1996);
console.log(age1);

// Arrow function
const yearUntilRetirement = (birthyear, firstName) => {
    const age2 = 2037 - birthyear;
    console.log(age2);
    const retirement = 65 - age2;
    console.log(retirement);

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Ted'));


const x = 10;
console.log(x);

console.log(firstname, lastname); // printing out statement


// ES6
const myFriend = 'Ibukun';
const age = 18;
let hasDriverLicence = false;
hasDriverLicence = true;
console.log(myFriend, age, hasDriverLicence);

// Data type
// String
// Number
// Boolean