console.log('Lection_8');

/*
    Тезисы:s
        xx-yy-zz - LE, scope
        xx-yy-zz - hoisting
        xx-yy-zz - closure
        xx-yy-zz - Object -> this
*/


// LE, Scope
// function f(a, b, c) {
//     // f.LE = { a: 46, b: 67, c: 34, d: undefined }, f.scope = window = Global scope
//     var d = 10;


//     // f.LE = { a: 46, b: 67, c: 34, d: 10 }, f.scope = window = Global scope
//     // console.log(a, b, c, d, example); // Reference Error: example is not defined.
// }

// f(46, 67, 34);


// Hoisting

// value, ddExample - TDZ - Temporary Dead Zone
// console.log(test, value, ddExample);

var test = 'Unddd';
let value = 'test23';
const ddExample = 'asdasd';


function f1 () {}


// Hoisting - inside function


function coreFunction() {
    console.log(example); // undefined
    var example = 'test';

    coreInside();

    coreInside = function() {
        console.log('coreInside');
    }
}

// coreFunction();

// coreInside(); // Error -> ReferenceError: coreInside is not defined


// JS Closures

// var y = 200;

// function f() {
//     var x = 10;
//     var z = 'Hello world!';
//     f2();

//     // console.log(z);

//     function f2() {
//         var example = 'Vaaa';

//         console.log(
//             example, // Local
//             x, // Closure(f)
//             y, // From Global Scope
//             z
//         );
//     }

//     return f2;
// }


// const someFunction = f();

// someFunction();
// someFunction();

// Math.random();



// ---------------------------------


const factory = function(customNames = []) {
    const test = '123';
    const list = ['Name_1', 'Name_2', 'Name_3'].concat(customNames);

    function fInside() {
        console.log(list);
        document.write('<br />' + list);
    }


    // console.log(test); 
    return fInside;
}


const getCustomList = factory(['Custom_name_1', 'Custom_name_2']);
const getCustomListEmpty = factory();


// getCustomList();
// getCustomListEmpty();


// Iterator

function getSteps(array) {
    var counter = 0;

    return function (example) {
        if (typeof example === 'function') {
            return example(array[counter++]);
        }

        return array[counter++];
    };
}

const step = getSteps([5, 0, 43, 8, -5]);
 

// console.log( step() ); // 5
// console.log( step() ); // 0
// console.log( step() ); // 43
// console.log( step() ); // 8
// console.log( step() ); // -5
// console.log( step() ); // undefined


const pow2 = function(item) { return item*item; };
const div2 = function(value) { return value/2;  }

const steps2 = getSteps([23,3, 7,664,6,45], pow2);

console.log( steps2(pow2) ); // example = pow2;
console.log( steps2() ); // example = undefined;
console.log( steps2(div2) ); // example = div2;