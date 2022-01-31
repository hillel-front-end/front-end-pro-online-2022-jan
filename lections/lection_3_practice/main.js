console.log('lection 3');
/*
 Тезисы:
    xx-yy-zz - Сгенерировать строку "-1-2-3-4-5-6-7-8-9-"
    xx-yy-zz - Вывести числа месяца (7 дней в строке). Выходные выделить жирным
    xx-yy-zz - Дано число n=1000. Делите его на 2 столько раз,
               пока результат деления не станет меньше 50.
               Какое число получится?
               Посчитайте количество итераций, необходимых для
               этого (итерация - это проход цикла)
    xx-yy-zz - Номер дня -> строка
    xx-yy-zz - Switch… case
*/

// i = 1;
//
// a = prompt('Enter number');
// console.log('isNaN', isNaN(a));
//
// while(isNaN(a)) {
//     i++
//     a = prompt('Enter number');
//     console.log('isNaN', isNaN(a));
// }
//
// console.log(a, 'count=', i);
//
// j=1
//
// do {
//     b = prompt('Enter number');
//     console.log('isNaN', isNaN(b));
//     j++
// } while (isNaN(b))

// let cacheIsNaN;
//
// do {
//     b = prompt('Enter number');
//
//     cacheIsNaN = isNaN(b);
//
//     if (cacheIsNaN) {
//         console.log('isNaN', isNaN(b));
//     }
// } while (cacheIsNaN)

// do {
//     b = prompt('Enter number');
//
//     if (isNaN(b)) {
//         console.log('isNaN', isNaN(b));
//     }
//
// } while (isNaN(b))
// console.log(isNaN(b));
//
// console.log(b, 'count=', j);


//"-1-2-3-4-5-6-7-8-9-"
// let i;
// const separator = ' '
// let resultString = separator;
//
// for(i = 1; i<=9; i++) {
//     // resultString = resultString + i;
//     resultString += i + separator;
//
//     console.log(resultString);
// }
//
// console.log(resultString);


//Вывести числа месяца (7 дней в строке). Выходные выделить жирным

let weekDay;
let week;

//week    = 0 -> 1 -> 2 -> 3 ( без -1)
//week    = 1 -> 2 -> 3 -> 4 ( с -1)
//weekDay = 1 -> 1 -> 1 -> 1
//          1 -> 8 -> 15 -> 22
//     let resultWeekString = '';

//((15 / 7) - 1) % 7 -> 1

// for(week = 0; week < 4; week++) {
//     // for(week = 1; week <= 4; week++) {
//     for(weekDay = 1; weekDay <= 7; weekDay++) {
//         let date = week * 7 + weekDay;
//         resultWeekString += date + ' ';
//         // resultWeekString += ((week - 1) * 7 + weekDay) + ' ';
//     }
//
//     const documentString = resultWeekString + '<br/>';
//
//     document.write(documentString);

        //resultWeekString = '';
// }
// const day = 5;

// if (day == 1) {
//     console.log('пт');
// } else if (day == 2) {
//     console.log('пт');
// } else if (day == 3) {
//     console.log('пт');
// } else if (day == 4) {
//     console.log('пт');
// } else if (day == 5) {
//     console.log('пт');
// }
const day = 5;

let weekHeaderString = '';

const FIRST = 1;

for (let day = 1; day <=7 ; day++) {
    switch (day) {
        case FIRST: {
            console.log('пн');
            weekHeaderString += 'пн  ';
            break;
        }
        case 2: {
            console.log('вт');
            weekHeaderString += 'вт  ';
            break;
        }
        case 3: {
            console.log('ср');
            weekHeaderString += 'ср  ';
            break;
        }

        case 4: {
            console.log('чт');
            weekHeaderString += 'чт  ';
            break;
        }
        case 5: {
            console.log('пт');
            weekHeaderString += 'пт  ';
            break;
        }

        case 6: {
            console.log('сб');
            weekHeaderString += 'сб  ';
            break;
        }
        case 7: {
            console.log('вс');
            weekHeaderString += 'вс  ';
            break;
        }

        default: console.log('НЕ ЗНАЮ ТАКОГО ДНЯ НЕДЕЛИ')
    }
}

document.write(weekHeaderString + '<br/><br/>')

for(week = 0; week < 5; week++) {
    let resultWeekString = '';

    for(weekDay = 1; weekDay <= 7; weekDay++) {
        //week -> 0 1 2 3 4
        let date = week * 7 + weekDay;

        if (date > 31) {
            break;
        }

        if (date < 10) {
            date = '0' + date;
        }

        if (weekDay === 6 || weekDay === 7) {
            resultWeekString += '<b>' + date + '</b> ';
        } else {
            resultWeekString += date + ' ';
        }

        // if (date >= 31) {
        //     break;
        // }
    }

    const documentString = resultWeekString + '<br/>';

    document.write(documentString);
}

// for (let i = 0; i < 10; i++) {
//     console.log('start iteration', i);
//     if (i % 2 != 0) {
//         continue;
//     }
//
//     console.log('end iteration', i);
// }











