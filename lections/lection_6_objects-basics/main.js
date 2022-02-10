/*
    Тезисы:
        xx-yy-zz - object intro - creating
        xx-yy-zz - properties - setting and getting (not get/set)
        xx-yy-zz - for..in, Object.keys, Object.values
        xx-yy-zz - method hasOwnProperty(), Object.getOwnPropertyNames()
        xx-yy-zz - Simple practice

        xx-yy-zz - Functions intro - creating
        xx-yy-zz - args, return
*/

const obj = {
    key: 'Hello',
    "1-x": false,
};

obj.key = obj.key + '!';
obj.test = 500400;

// delete obj.key;
delete obj['key'];

// console.log(obj);

// Object.keys()
// Object.entries()
// Object.values()

// for .. in

const array = [2, 6, 8, 9];

array['custom'] = 'asdasd';

// const flag = new Boolean(false);
// console.log(obj);


// obj.hasOwnProperty(key)

// obj.__proto__.globalCustom = 'Test value';

// for (let key in obj) {
//     if (!obj.hasOwnProperty(key)) {
//         continue;
//     }

//     console.log(key, obj.hasOwnProperty(key));
// }

// -------------------------------------------------
// obj.toString()

const address = {
    city: 'Name_1',
    post: 04056,
    phones: [],
    // toString() {
    //     return this.city + ' ' + this.post;
    // }
};

// console.log(address);

// console.log( address + '123123' );
// console.log( address.toString() + '123123' );
// console.log( '[object Object]' + '123123' );

// document.write(Object.keys(address));


// const list = [1, 2, 3,12,41,4,124,124,12];

// PLS NOT READ THIS!
// list.toString = function() {
//     return '<br />[' + list.__proto__.toString.call(list) + '], Length - ' + list.length
// };

// document.write(list);

// --------------------------------------
// Reference

// Copy a by value - Number, String, Boolean
// let a = 10;
// let b = a;

// console.log(a, b);
// b++;
// console.log(a, b);


// let s = 'Hello';
// let s2 = s;

// s2 = s2 + '!';

// console.log(s, '|', s2)

// "Copy" ref - Object, Array, Function
// const data = { x: 10 };
// const data_value = data;

// data_value.x = 60;

// console.log(data, data_value);
// console.log(data === data_value);

// const list2 = [6, 7];
// const list3 = list2;

// list3.push(99);

// console.log(list2, list3);

// How to copy?


// const info = { x: 10, y: 20 };

// const infoCopy2 = {
//     x: info.x + 20, 
//     y: info.y
// };

// const copyInfo = { ...info }; // деструктуризация
// const copyInfo = Object.assign({}, info); // Copy

// console.log(info, copyInfo)
// console.log(info === copyInfo);

// -----------------------------------------------
