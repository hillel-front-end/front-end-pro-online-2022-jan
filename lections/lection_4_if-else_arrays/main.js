console.log('lection 2');

/*
    Тезисы:
        xx-yy-zz - array intro
        xx-yy-zz - cycles + arrays
        20-01-00 - sum, find
        xx-yy-zz - push, pop, splice, slice, "copy"

    Практика:
        - Задачи из раздела Лекция
*/


// a^n ->

// powResults = 5;
// 5^4 -> 5*5*5*5 || 1*5*5*5*5

// for(1; 2; 3) { 4; }

// 1 - начальные условия: цифра 5, счетчик будет 10

// 2 - условие выполнения цикла: цифра 4 (показатель степени)
// счетчик <= 14

// a = 5;
// n = 1;
// powResults = a;
// if (n == 0) {
//     powResults = 1;
// } else {
//     for (i = 1; i < n; i++) { // 3
//         powResults = powResults * a;
//     }
// }
// console.log(powResults)



 // каждое число в ряде 15..24 возвести в степень 3
 // * - высчитать только для нечетных цифр

//  x1 = 15;
//  x2 = 24;
//  n = 3;

//  for (i = x1; i <= x2; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     a = i;
//     powResults = a;
//     if (n == 0) {
//         powResults = 1;
//     } else {
//         for (j = 1; j < n; j++) { // 3
//             powResults = powResults * a;
//         }
//     }
//     console.log(powResults)
//  }


// arrays

A = [1, 2, 3, 4, 5, 89, 78]; // инициализация массива

// console.log(A);
// console.log(A.length);

// ----------------------

// console.log( A[0] ); // 1

// Get last elem
// console.log( A[A.length - 1] );

// index = 0;

// for (i = 0; i < A.length; i++) {
//     if (A[i] % 2 === 0){
//         console.log(i, A[i]);
//     }
//     if (A[i] === 89) {
//         index = i;
//     }
// }

// console.log(index);

// ----------------------------

// random array + find smth



// console.log( Math.random() ); // 0..1

// random(x) -> 0..x+1
// 0..9 -> random(10)
// random(41) - 20 -> -20..20
// random(120) + 43 -> 43..162

// console.log( Math.floor(Math.random()*10) );

// randomCeil(x) -> 1..x

// 150..400

// randVal = Math.floor(Math.random()*251) + 150;
// console.log(randVal);


A = [];
A.length = 10;


for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random()*251) + 150;
}

console.log(A);


// find max and min
// max = A[0];
// min = A[0];

// for (i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i];
//     }

//     if (A[i] < min) {
//         min = A[i];
//     }
// }

// console.log(max, min);


// sum / A.length = сред. ариф.

// sum = A[0];
// for (i = 1; i < A.length; i++) {
//     sum = sum + A[i];
// }
// console.log(sum / A.length);











