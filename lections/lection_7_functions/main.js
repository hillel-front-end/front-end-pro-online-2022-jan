console.log('Lection_6');

/*
    Тезисы:
        xx-yy-zz - arguments
        xx-yy-zz - args, return
        xx-yy-zz - optional args, return any
        xx-yy-zz - simple scopes
        xx-yy-zz - scopes - extended
*/

// function f(a, b) {
//     console.log( arguments ); // ... rest operator
//     console.log(a, b);
// }

// function f1() {
//     var a = arguments[0];
//     var b = arguments[1];
//     console.log( arguments ); // ... rest operator
//     console.log(a, b);
// }

// f(60, 'Hello world!', undefined, 60, [1, 2, 3]);
// f1(60, 'Hello world!', undefined, 60, [1, 2, 3])


// const arr = [1, 2, 3, 4, 5];

// arr.splice(0, 1, 1, 66, 77, 88, 99);
// arr.push(66, 77, 88, 99);

// console.log(arr);

// ------------------ 
// Scopes

// if (true) {
//     let value = 10;

//     console.log( value );
// }


// console.log( value );


// Global Scope - window

// alert();
// console.log( console );

// Creation
value = 12;

var val1 = 15;
/*
 Оператор var - создает локальную переменную 
  в текущей области видимости
*/

// console.log(window);
// console.log( window.value, window.val1 );

// Не имеет разницы
// console.log(value, window.value);



// -----------------
// let и const также создают "глобальную" переменную
// let val2 = 16;
// const val3 = 17;


// --------------------------------------------
// Что создает область видимости?
// Ответ №1 - Функция
// оператор var 
// операторы let и const
function fCore(a, b) { // Local scope
    // var example - создается как локальная переменная
    var example = 'Hello example!';

    // super_name - создается как глоабльная переменная
    super_name = 'Example_name';
    window.super_name_2 = 'Example 2 Name';

    console.log(example, super_name);
}

// fCore();

// console.log(
//     // example, 
//     super_name,
//     super_name_2
// );


// ----------------------------------------
// Разрешение переменной

// Global
// var x = 10;
// y = 700;

// function f() { // Local - f
//     var y = 20;

//     y = 30; // Mutation for local variable y
//     // window.y = 300;
//     // x = 50;

//     console.log(
//         'Log in Local',
//         x, // 10
//         y // 30
//     );
// }

// f(x);

// console.log('Log in Global',x, y); // 10, 700


// -------------------------

// Global
// var x = 300;
// function f() { // Local - f
//     var x = 20;
//     var list = [1, 2, 3];

//     // f1();
//     f2(x, list);

//     console.log(list);

//     function f1() { // Local - f1
//         console.log('f1', x); // 20
//         x = 0;
//         console.log('f1', x); // 0
//     }
// }

// function f2(y, list) {
//     // list.push(99);
//     // y = -300;
//     console.log('f2', x, y);
// }

// f();


// -------------------------------------------

// Lexical Environment -> Хранит все 
// локальные переменные что доступы функции

// f.LE = { x: 10, y: 'string name' }
// Scope: Ref = Global (window)



// function f(a, b) { // Scope: Ref = Global (window)
//     // f.LE = { a: 250, b: undefined, f1: func, x: undefined, y: undefined }
//     var x = 10; 
//     // f.LE = { a: 250, b: undefined, f1: func, x: 10, y: undefined }
//     var y = 'string name';
//     // f.LE = { a: 250, b: undefined, f1: func, x: 10, y: 'string name' }

//     f1(false);
//     // f.LE = { a: 250, b: undefined, f1: func, x: 700, y: 'string name' }

//     function f1(example) {
//         // f1.LE = { example: false }
//         // Scope = f.LE

//         x = 700; // BAD CODE
//         console.log(x, y); // 10, 'string name
//         console.log(example); // false
//     } 
// }


// f(250);


// ----------------------------------------

var x = 300;

function func_1(){
    // func_1.LE = { x: undefined }
    var x = 20;
     // func_1.LE = { x: 20 }

    return func_2(x);
}

function func_2(y) {
     // func_2.LE = { y: 20 }
     // func_2.Scope = Global
    return x + y; // 300 + 20
}

console.log(func_1()); // 320 | 40

