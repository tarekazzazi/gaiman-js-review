console.log('In script.js');

let myName = 'Tarek';

console.log('My name is', myName);
//console.log('my name is','Tarek');
/*
let -- a keyword, we are about to declare a variable
        says: we are about to declare a variable

myName --- the name of variable

= --- the assignment operator

'Tarek' --- the value
*/

//Use camelCase!y
let myLastName = 'Azzazi';
console.log(myLastName);

// other kinds of casing:
// snake_case
let my_last_name = 'Azzazi';
// kebob-case
// let my-last-name = 'Azzazi';
// SCREAMING_SNAKE_CASE
let MY_LAST_NAME = 'Azzazi';

/**
 * Expressions
 * 
 * Some code that evaluates to a single value
 * */
//                      an expression!V
console.log('My name is' + myName + ' ' + myLastName);
//console.log('My name is Tarek Azzazi');

function add(n1, n2) {
    return n1 + n2;

}
let result = add(5, 7);
// let result = 12;

if (8 > 7) {
    //if (false) {...}
    //.....
}

let isJamesBond = myName + '   ' + myLastName === 'James Bond';
// let isJamesBond = 'Tarek Azzazi' === 'James Bond';
// let isJamesBond =  false; 
console.log(isJamesBond);


let isJamesBond = myName + '   ' + (myLastName === 'James Bond');
// let isJamesBond = myName + ' ' + (false);
// let isJamesBond =  Azzazi false; 
let a aNumberMabye - '23';
aNumberMabye + 2
// '232' <-- concatenation
Number(aNumberMabye) + 2
//25 <-- adition

'ten'





/**
 * NaN          "Not a Number". You did bad math
 * undefined     The variable hasn't been defined
 * not defined   The variable hasn't even been declared
 * null          Nothing, on Purpose
 */

let somthingMabye;
console.log('somthingMabye', somthingMabye);

function subtract(n1, n2) {
    // n1 = 7
    // n2 = undefined
}

let artisrtFirstName = 'Prince';
let artisrtLastName = null; // <-- nothing on purpose


8 === 8;            //true
8 === '8';          //false

//Don't do this!
8 == '8';           //true
//8 === Number('8');

/**
 * Conditionals
 */

let isSomthingTrue = myName === 'Tarek';
// let isSomthingTrue = 'Tarek' === 'Tarek';
// let isSomethingTrue = true;

// if (true){}
if (isSomthingTrue) {
    //do this stuff
    //inside of this code block
}

while (isSomthingTrue) {
    //code block
}

let dayOfTheWeek = 'Monday';
if (dayOfTheWeek === 'Tuesday') {

} else {

}

switch (dayOfTheWeek) {
    case 'Monday':

        break;
    case 'Tuesday':

        break;
    default:

        break;

}


//Ternary: if/else, and resolves to a value
let height = 55;
height > 50 ?
    'you can ride this ride'        //if
    :
    'keep growing, try later'       //else
// let message = 'you can ride this ride';

let welcomeMessage = `
    Welcome to the amusement park, ${myName}!

    Check out the rollercoaster:
        ${height > 50 ? 'you can ride it!' : 'too short, so sorry'}

`;

/**
 * Functions
 */

/*
Inputs ( " arguments or parameters") 


*/
function isTallEnoughToRide(yourHeight, dangerLevel) {
    //yourHeight = 50
    // dangerLevel 'kiddie'
    //if ('kiddie' === 'kiddie')
    let minHeight;
    if (dangerLevel === 'kiddie') {
        minHeight = 28;
    } else (dangerLevel === 'intense'){
        minHeight = 55;
    }

    //return 50 > 28;
    return yourHeight > minHeight                       //boolean

}

isTallEnoughToRide(50, 'kiddie');
//let canIRide = true

function stressRelease() {
    console.log('YAAAHHAHAHAHAAHAH ');
}

function WelcomeVisitor(name, height) {
    sayHello(name);

    if (isTallEnoughToRide(height, 'kiddie')) {
        console.log('Have Fun');
        
    }else{
        console.log('Do you know where your parents are');
    }
    
}

function sayHello(name) {
    console.log(`Hello ${name}`);
    
}

// Declaring a function
// "function declaration"
function makeASentence(words){
    return words.join('   ')   +   '.';
}
// Anonymous function
// function expression
function (words){
    return words.join('   ')   +   '.';
}

// Arrow function 
let makeASentence3 = (words) => {
    return words.join('   ')   +   '.';
}
//Single argument does not need parentheses
let makeASentence4 = words => {
    return words.join('   ')   +   '.';

//One liner!
let makeASentence5 = words => words.join('') + ',';

// Calling a function
let welcome = makeASentence(['Welcome','to','Gaimman']);
// let welcome = 'Welcome to Gaimen.'
