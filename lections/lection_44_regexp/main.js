console.log('lection_27');

var str;
let res;
var pattern = /afjkasnkglnaskl/;
// var pattern2 = new RegExp(`afjkasnkglnaskl-${10 + 20}`)

// console.log(pattern, pattern2)



// search
// str = 'Hello, ExAmpLe!';
// res = str.search(/Example/i);
// console.log(res)

// str = `so23me9860 пsOMEивет шаблон-2 шаблон-8 привет как ждела шаблон шаблон-!`;


// match
// str = 'Hello, example!';
// res = str.match(/Example/)
// console.log(res)


//match /g - global
// str = 'Hello, example example example!';
// res = str.match(/Example/ig)
// console.log(res)

// split
// res = '10:23-54'.split(/:|-/)
// console.log(res)


/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

// str = `Exemple 25.03/1932  25_03_1932  25/03/32  125 25.03.1932 Example 0.87 Exrmple 97`;
// res = str.match(/Ex[a?r]mple/ig)
// res = str.match(/\d\d[./_]\d\d[./_]\d\d\d\d/ig)
// console.log(res)


// str = 'Hello, how are you? 18'
// res = str.match(/\D/ig)
// console.log(res)

/*
        \d - [0-9] - digit
        \w - [0-9a-zA-Z_] - word
        \s - [ \f\n\r\t\v]

        \D - [^0-9]
        \W - [^0-9a-zA-Z_]
        \S - [^ \f\n\r\t\v]
*/


// -----------------
// . ? [ ] { } ^ \ / |
// \. \? \/ \| \\ \[ \]

/*
        \d{2, 5}
        \d{1,} - \d+
        \d{0,1} - \d?
        \d{0,} - \d*
*/

// str = 'Hello, how are you? [18 hours] 18 hours? 18 hours^'
// res = str.match(/\[\d\d hours\]/ig)
// res = str.match(/\d\d hours\^/ig)
// console.log(res)

// .

// str = 'Petro'
// res = str.match(/Pet.o/ig)
// console.log(res)

// ?

// str = 'Kyryllo Kyrylo'
// res = str.match(/Kyryll?o/ig)
// console.log(res)

// |

// str = 'Sychov Sichov Slchov'
// res = str.match(/S(y|i|l)chov/ig)


list = [
        'ell',
        'el',
        'al',
        'iden'
];

// str = 'Hello, Helo, Halo, Hideno, Hasdasdfo'
// res = str.match(/H(ell|el|al|iden)o/ig)
// res = str.match(new RegExp(`H(${list.join('|')})o`, 'ig'))

// console.log(res)


// {}
// str = 'Heo Helo Hello, Helllo, Hellllo, Helllllo'
// res = str.match(/Hel{2,5}o/ig)
// res = str.match(/Hel{1,3}o/ig)
// res = str.match(/Hel{0,3}o/ig)

// str = '10.06.1956 18.02.1968 19.01.1932 19.01.'
// res = str.match(/\d{2}\.\d{2}\.\d{0,4}/ig)
// console.log(res)

// + - {1,}

str = 'Hello, 0......2 123.2 1983 123.35 26236,124 14 how 647 are 1445 2 you?'
// res = str.match(/\w+/ig)
// res = str.match(/\d+/ig)
// res = str.match(/\d+[.,]\d+/ig)
// res = str.match(/(\d+[.,]\d+|\d+)/ig)
// res = str.match(/\d+([.,]\d+)?/ig)
// res = str.match(/\d[0-9,.]+/ig)
// console.log(res)

// * - {0,}
// str = 'Hello, 02'
// res = str.match(/0!*2/ig)
// console.log(res)

// ^ $
// str = 'world-1 Hello, world-2 '
// // res = str.match(/^world-\d/ig)
// res = str.match(/world-\d$/ig)
// console.log(res)


// RegExp Simple URL
// https://google.com

// str = 'https://google.com';
// console.log(str);
// console.log( /^(https?:\/\/)?([a-zA-Z-]+\.)?[a-zA-Z-]+\.[a-zA-Z]{2,4}$/i.test(str) );