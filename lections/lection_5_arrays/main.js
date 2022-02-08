let array = [
    [1, 2, 3], 
    [4, 5, 6, 7, 8, 9, 9], 
    [7, 8, 9],
];

// console.log(array);

// console.log( array[0][2] ); // 3
// console.log( array[2][0] ); // 7

// for (i = 0; i < array.length; i++) {
//     const row = array[i];

//     for (j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }


// Стандартный цикл перебора двумерного массива
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
//     for (j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);
//     }
// }

// ---------------------------------------------------

// Вывести ряд k

// const k = 0;
// for (j = 0; j < array[k].length; j++) {
//     console.log(array[k][j]);
// }


// ---------------------------------------------------

// find max
// const n = 10;
// const m = 5;

// A = new Array(n);

// for (i = 0; i < A.length; i++) {
//     A[i] = new Array(m);
//     for (j = 0; j < A[i].length; j++) {
//         A[i][j] = Math.floor(Math.random()*50 + 10);  

//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }

// let max = A[0][0];


// for (row = 0; row < A.length; row++) {
//     for (col = 0; col < A[row].length; col++) { 
//         if (A[row][col] > max) {
//             max = A[row][col];
//         }
//     }
// }

// console.log(A, max);

// Arrays and indexes

const n = 15;
const m = 15;

A = new Array(n);

for (i = 0; i < A.length; i++) {
    A[i] = new Array(m);
    for (j = 0; j < A[i].length; j++) {
        A[i][j] = i + ';' + j;  

        document.write(A[i][j] + '&nbsp;&nbsp;');
    }
    document.write('<br />');
}

/*
 Главная диагональ
 Побочная диагональ
 Ряд
 Столбец
 Зоны: выше\ниже, больше\меньше чем диагональ или ряд\столбец
*/

document.write('<br />');

k = 2;

k1 = 5;
k2 = 3;

point = n / 4

console.log(point)

const a = 5;
const b = 5;
const R = 5;

const a1 = 1;
const b1 = 5;

const a2 = 5;
const b2 = 3;

for (i = 0; i < A.length; i++) {
    A[i] = new Array(m);
    for (j = 0; j < A[i].length; j++) {
        A[i][j] = 0;

        // Главная диагональ
        // if (i == j) {
        //     A[i][j] = '1';
        // }

        // Побочная диагональ
        // if (i + j == m - 1) {
        //     A[i][j] = '1';
        // }

        // Ряд
        // if (i == k) {
        //     A[i][j] = '1';
        // }

        // Столбец
        // if (j == k) {
        //     A[i][j] = '1';
        // }

        // Выше\ниже главной диагонали
        // if (i > j) {
        //     A[i][j] = '1';
        // }

        // if (i < j) {
        //     A[i][j] = '1';
        // }

        // Выше\ниже побочной диагонали
        // if (i + j > m - 1) {
        //     A[i][j] = '1';
        // }

        // if (i + j < m - 1) {
        //     A[i][j] = '1';
        // }


        /* Пересечения - логическое И - && */
        // if (i == k1) {
        //     A[i][j] = '1';
        // }
        // if (j == k2) {
        //     A[i][j] = '2';
        // }

        // if (i == k1 && j == k2) {
        //     A[i][j] = 'x';
        // }

        // if (i > j) {
        //     A[i][j] = '1';
        // }

        // if (i + j >= n - 1) {
        //     A[i][j] = '2';
        // }

        // if (i >= j && i + j >= n - 1) {
        //     A[i][j] = 'x'; 
        // }

        // Квадрат
        // if(
        //     i >= point && 
        //     i < (point)*3 &&
        //     j >= point &&
        //     j < (point)*3
        // ) {
        //     A[i][j] = 'x'; 
        // }

        // Circle
        // (i - A)^2 + (j - B)^2 == R^2
        // if (
        //     (i - a)**2 + (j - b)**2 <= R**2
        // ) {
        //     A[i][j] = '<span style="color: red;">x</span>'; 
        // }

        // Line
        // (i - a1)^2 + (j - a2)^2 == (i - b1)^2 + (j - b2)^2

        if (
            ((i - a1)**2 + (j - b1)**2) == ((i - a2)**2 + (j - b2)**2)
        ) {
            A[i][j] = '<span style="color: red;">x</span>'; 
        }
        



        document.write(A[i][j] + '&nbsp;&nbsp;');
    }
    document.write('<br />');
}



// -----------------