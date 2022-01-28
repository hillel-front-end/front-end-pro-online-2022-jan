console.log('lection 2');

/*
 Тезисы:
    xx-yy-zz - Вступление
    xx-yy-zz - создание переменных var, let, const
    19-39-zz - оператор %, Math.pow, Math.random, Math.floor, Math.round, Math.ceil
    xx-yy-zz - boolean
    xx-yy-zz - if else
    xx-yy-zz - logic &&, ||, !
    xx-yy-zz - cycles do...while, while
    xx-yy-zz - cycles for

Практика:
    Возведение числа в степень a^n, без Math.pow
*/

// sep = '<br />------------------';

// H = +prompt('H -> ?');
// S = parseInt(prompt('S -> ?'));

// document.write(
//     sep + 
//     'V = S*H -> V=' + (H * S) + 
//     sep
// );

// -------------------------------------------------------------




x = 10;

// var -> variable
var y = 10;

// ES6
let z = 10;
const k = 10;


// console.log(x, y, z, k);
x = 20;
y = 20;
z = 20;
// k = 20; // Error
// console.log(x, y, z, k);



// ------------------------------------
// MOD, %

let a = 12;
let b = 3;

let c = a / b;

// console.log(c);

c = a % b;

// console.log(c);

/*

10 | 3
_______
 9        3
---
 1
*/

// ----------------------------
// Math


// const value = 4.543;

// console.log(value);
// console.log('Math.floor()', Math.floor(value) );
// console.log('Math.ceil()', Math.ceil(value) );
// console.log('Math.round()', Math.round(value) );


// const sq = 3;
// console.log( Math.pow(sq, 3) );


// ----------------------------
// Boolean

let flag = true;
let flag2 = false;

// console.log(typeof flag);


// ----------------------------
// if else

// if (expression -> Boolean) { // code }

flag = false;

// if (flag) {
//     console.log('TRUE!!!');
// }

flag = true;

// if (flag) { 
//     // True code
//     console.log('TRUE!');
// } else {
//     // False code
//     console.log('FALSE!');
// }


// a = +prompt();
// if ( isNaN(a) ) {
//     console.warn('ERROR! a is wrong.');
// } else {
//     console.log(a * 12);
// }

// -----------------------------------------
// 10 + 20 -> 30

/*
    x - 2 = 10 - 3
    x = 9

    // ----------------

    f(3) -> false
    f(9) -> true
*/
const val_1 = 6;
const val_2 = 5.5;

// console.log('==', val_1 == val_2);
// console.log(
//     '== Math.round()', 
//     val_1 == Math.round(val_2)
// ); // false
// console.log('>', val_1 > val_2);
// console.log('<', val_1 < val_2);
// console.log('>=', val_1 >= val_2);
// console.log('<=', val_1 <= val_2);

// console.log('!=, <>', val_1 != val_2);

// console.log('===', val_1 === val_2);


// a = +prompt();

// if (a > 10) {
//     console.log('A more than 10');
// }


// a = +prompt();
// b = +prompt();

// if (a > 0 и b > 0) -> a*b

// console.log(5 > 0 && -3 > 0);
a = -5;
b = -4;

if (a > 0 && b > 0 && a != b) {
    console.log(a * b);
}


// console.log(a > 0 && b > 0);
// console.log(5 > 0 && b > 0);
// console.log(true && b > 0);
// console.log(true && -3 > 0);
// console.log(true && false);
// console.log(false);


if (b != a || a > 0) {
    // console.log('TRUE');
}

// console.log(a > 0 || b != a);
// console.log(5 > 0 || b != a);
// console.log(true || b != a);
// console.log(true || -3 != a);
// console.log(true || -3 != 5);
// console.log(true || true);
// console.log(true);


// -----------------------------------------
// cycles

// вывести числа от 1 до 10

// Цикл с предусловием
// while() {}


// i = 0; // # - нач условия
// while(i <= 10) { // # - условие выполнения цикла 
//     console.log(i);
//     i = i + 1; // # - шаг
// }

// Цикл с постусловием
// do {} while();

// i = 1;
// do { 
//     console.log(i);
//     i = i + 1;
// } while(i <= 10);


// Цикл с счетчиком
// for(1; 2; 3;){ 4; }
/*
 1 - нач условия
 2 - условие выполнения цикла
 3 - действие между итерациями (шаг)

*/

for (i = 1; i <= 10; i++) {
    console.log(i);
}

/*
 1 ------> 2 ---TRUE----> 4 ----> 3
           |                       |
           *----------------------*
*/
