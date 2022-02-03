/*
 Создать массив размерностью `n`,
  где `n` вводится с клавиатуры.

 Заполнить случайными числами в 
 диапазоне `-220 ... 435`.

 Вывести в документ числа, которые состоят
из двух цифр.
*/

n = +prompt('n = ...');

// Numbers = [];
// Numbers.length = n;

// Создание массива через конструктор
Numbers = new Array(n);

for (i = 0; i < Numbers.length; i++){
    Numbers[i] = Math.floor(Math.random()*656);
    let val = Math.abs(Numbers[i]);

    if (val >= 10 && val <= 99) {
        document.write(Numbers[i] + '<br />');
    }
}

// console.log(Numbers);





/*
    Заполнить массив случайными числам. 
    Найти все простые числа.
    Сохранить их в новый массив.
*/

Numbers = new Array(n);
PrimeList = new Array();

for (i = 0; i < Numbers.length; i++){
    Numbers[i] = Math.floor(Math.random()*15);
}

let array = Numbers;

for(i = 0; i < array.length; i++) {
    n = array[i];

    if (n < 2) {
        continue;
    }

    isPrime = true;
    for(j = 2; j < n; j++) {
        if (n % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n, 'is Prime');

        PrimeList.push(n);
        // PrimeList[PrimeList.length] = n;
    }
}

console.log(Numbers);
console.log(PrimeList);