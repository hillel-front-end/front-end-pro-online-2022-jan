// Funciton ->
/*

function fname(argument_1, argument_2, ... ) {
 // code
 ...
}


// Call?

fname(3, false, 'string');

*/

// 1 - function declaration

// myFunction();

function myFunction() {
    console.log('Test');
}

// myFunction();

// console.log( myFunction );
// console.dir( myFunction );


// ----------------------------------------------
// 2 - function expression

// console.log(myFunctionExp);
// myFunctionExp(); // ERROR
 
var myFunctionExp = (a, b) => {
    return a + b;
};

var t = function(a, b) {
    return a + b;
} 

// var exampleRun = myFunctionExp;

// console.log(exampleRun === myFunctionExp)

// exampleRun();

// myFunctionExp = function() {
//     console.log('UPDATED TEST');
// };

// exampleRun();
// myFunctionExp();

// // myFunction();
// // myFunctionExp();

// console.log(myFunction === myFunctionExp);


// -------------------------------------------
function sum(p1, p2) {
    return p1 + p2;
}

// function 

// a = 10;
// b = 30;

// console.log( sum(1, 3) + sum(a, b) + 25 );
/*
    sum(a, b) -> 

    p1 = a;
    p2 = b;

    return p1 + p2;
*/

// console.log( 10 + 10 + 25 );

// arr = [];

// arr.push( sum() );

// let ttt = console.log();
// let tttt = document.write();


