/*
 Тезисы:
    xx:yy - Вступление
    xx:yy - запуск кода
    xx:yy - подключение файла <script src />
    20:27 - базовые команды вывода
    xx:yy - математические операции
    xx:yy - создание и использование переменных
    xx:yy - операции со строками и числами
    xx:yy - типы данных Number, String
    xx:yy - конкатенация и числа
    21:22 - унарные операторы, оператор остаток от деления
    xx:yy - parseInt, prompt, confirm
    xx:yy - smart операторы, инкремент, декремент
*/

// document.write('Test');

// console.log('Test');
// console.log(10 - 5);
// console.log(10 + 5);
// console.log(10 * 5);
// console.log(13 / 5);


// console.log( 20 + (10 * 20) );


// ----------------------------------------------
// Variables

// a = 90

// a - название переменной
// = - присвоить значение
// 50 - значение


a = 10;
b = 20;

// console.log(a, b, a + b);
// console.log(200);

// console.log( a * ((b + 1) / b) * 2);


// ---------------------------------------------------------------
// Data Types - Number and String

// Number

// console.log( 10 ); 
// console.log( 10.6 );

example = 10;

// console.log(example);

// typeof operator

// console.log(typeof example);


// String
name1 = '';
name2 = "";
name3 = ``; // ES6

// console.log(" I'm working with \"Code\" ");

my_name = 'Test Example Name';
// console.log(my_name);


// --------------------------------------------------------------
// Number and String math operations

value_1 = 5;
value_2 = '3';


// console.log(value_1 + value_2);
// console.log(5 + value_2);
// console.log(5 + '3');
// console.log('5' + '3');
// console.log('53');
// Number + String -> Number->String + String

// + -> Plus
// + -> Concatenation

// v1 + v2 -> typeof v1, typeof v2
// Number, Number -> + -> Plus
// Number, String or String, Number or String, String ->
// + -> Concatenation

// console.log(value_1 - value_2);
// console.log(value_1 * value_2);
// console.log(value_1 / value_2);


// ---------------------------------
// parseInt

// value_1 = 5;
// value_2 = '3000jkdfngkdfnklgdf';

// value2Int = parseInt(value_2);

// console.log(value_1 + value2Int);

// +, -


value_1 = 5;
value_2 = '3';

// +1 * (x + 3)
// +(x + 3)

// x = 30
// b = +x
// b -> 30 

// console.log(value_1 + (+value_2) );
// console.log(5 + (+value_2) );
// console.log(5 + +value_2 );
// console.log(5 + (+'3') );
// console.log(5 + (+1 * '3') );
// console.log(5 + (+1 * 3) );
// console.log(5 + 3 );
// console.log(8 );



// ---------------------------------
// NaN - Not a Number


// console.log(typeof NaN);

// console.log(25 - '23_test');
// console.log(25 - '23_test');

// a = 25 - '23';

// console.log( parseInt('Hello')  );


// ---------------------------------


// a = 50;

// console.log(a);

// a = a + 10;
// // a = 50 + 10;
// // a = 50 + 10;
// // a = 60;

// console.log(a);


// a = a + 1;
// console.log(a);

// // Инкремент
// a++;


// console.log(a);

// ++a;

// console.log(a);


// // Декремент

// a--;
// console.log(a);

// --a;
// console.log(a);

// ---------------------------------------------


a = 5;
// console.log(a);

// console.log(a++);
// console.log( a ); a = a + 1;

// console.log(a);

// console.log(++a);
// // a = a + 1; console.log(a);

// console.log(a);


a = 10;
b = 4;
c = 3;
d = 7;

console.log(
    (++a) + (b++) + (--c) + (--d)
);
console.log(
    11 + 4 + 2 + 6
);