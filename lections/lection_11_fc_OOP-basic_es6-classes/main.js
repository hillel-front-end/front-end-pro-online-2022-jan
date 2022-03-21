console.log('Lection_11');


// function getChildObject(parent, data) {
//     const mixedFields = {
//         started: false,
//     };
//     return Object.assign(
//         Object.create(parent), // returns {}
//         mixedFields, 
//         data,
//     );
// }

// const usersParent = {
//     getName() {
//         return this.name + ' ' + this.surname;
//     },
//     getAge() {
//         return this.age;
//     },
// };

// const user_1 = getChildObject(usersParent, {
//     name: 'Parent_Name',
//     surname: 'Surname',
//     age: 23,
// });

// const user_2 = getChildObject(usersParent, {
//     name: 'Parent_Name 2',
//     surname: 'Surname 2',
//     age: 78,
//     started: true,
// });


// let result = parent.getName(); // this -> parent

// console.log(result);
// console.log(user_1.getName(), user_1.getAge());
// console.log(user_2.getName());

// user_2.name = 'Updated'

// console.log(user_1.getName());
// console.log(user_2.getName());

// console.log(user_1, user_2);

// ----------------------------------------------------

// Functions constructors

function Animal(type, name, p3) {
    this.type = type;
    this.name = name;
    this.age = p3;
    // return undefined;
}

// 1. Declaration
// 2. Return - !
// 3. Call
// 4. Param
// 5. this - !

// Animal(); // windows
// window.Animal(); // object before '.'
// new Animal(); // this -> ???

const p1 = new Animal('Dog', 'Boni', 6); // функция-конструктор
const p2 = new Animal('Cat', 'Rubik', 3); // функция-конструктор

// console.log(p1, p2);

/*
 new ->
    1. Вызывается функция Animal
    2. Возвращает новый созданный объект X
    3. this функции Animal !перенаправлен! на X

*/

// --------------

function Parent(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Parent.prototype.getSum = function () {
    return this.x + this.y;
};

Parent.prototype.u = 56858;

const child_1 = new Parent(10, 23);
const child_2 = new Parent(3, 65);

console.log(child_1, child_2);

// console.log(child_1.__proto__ === Parent.prototype); // true
// console.log(child_1.constructor === Parent); // true
console.log('---------------------------');
// --------------

// ES6 Class

class Table {
    started = false;
    u = 584587;
    
    constructor(x, y, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        // this.started = false;
        // this.u = 584587;
    }

    getSum() {
        return this.x + this.y;
    }

   
}

const table_1 = new Table(10, 23);
// table_1.started = true;
const table_2 = new Table(3, 65);

console.log(table_1, table_2);