// const obj = {
//     color: 'green',
//     height: 30,
//     finished: false,
//     list: [
//         'ing_1',
//         'ing_2',
//         'ing_3'
//     ],
//     address: {
//         city: 'City_1',
//         post: '05653'
//     }
// };

// console.log(obj)
// console.log( obj.finished )
// obj.finished = true;
// console.log( obj.finished )
// console.log( obj.address.city )

// #2

// console.log( obj['finished'] )

// const key = 'color';
// console.log( obj[key] )


// console.log([1, 2, 3]);
// console.log({0: 10, 1: 20, 2: 30, length: 3});

// --------------------------------------------------
// Перебор

const obj = {
    color: 'green',
    height: 30,
    finished: false,
    list: [
        'ing_1',
        'ing_2',
        'ing_3'
    ],
    address: {
        city: 'City_1',
        post: '05653'
    },
    0: 'Masha',
};


// for (let key in obj) {
//     // obj['list']
//     console.log(key, obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()

// console.log( Object.keys(obj) );
// console.log( Object.values(obj) );
// console.log( Object.entries(obj) );

obj.text = 'hello world!';
delete obj.address;

console.log(obj);