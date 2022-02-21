console.log('Lection_9');

/*
    Тезисы:
        xx-yy-zz - Object -> this
        xx-yy-zz - Arrow functions
        xx-yy-zz - Array methods - map, filter, foreach etc.
        xx-yy-zz - myForeach, myMap, myFilter
        xx-yy-zz - call, apply, bind - intro
*/


// this - reference -> object


function f() {
    console.log( this );

    return this.a + this.b;
}

const data = {
    a: 'Hello',
    b: ' World',
    getHelloWorldString: f
}

const info = {
    a: 'Info Name',
    b: ' Info Surname',
    x: 200,
    f2: f,
}


// console.log( data.getHelloWorldString() ); // Context = this = data
// console.log( info.f2() ); // Context = this = info

function getFullNameByParam(student) {
    return '<li>'+ student.name + ' ' + student.surname  +'</li>';
}

function fff() {
    return '<li>'+ this.name + ' ' + this.surname  +'</li>';
}

const students = [
    { name: 't1', surname: 't2', email: 't1@t2', getFullName: fff },
    { name: 't11', surname: 't21', email: 't11@t21', getFullName: fff },
    { name: 't12', surname: 't22', email: 't12@t22', getFullName: fff },
    { name: 't13', surname: 't23', email: 't13@t23', getFullName: fff },
];

let content = '';

for(let i = 0; i < students.length; i++) {
    // <li>'+ students[0].name + ' ' + students[0].surname  +'</li>
    // console.log(students[i]);

    // content = content + getFullNameByParam(students[i]);

    const student = students[i];
    content = content + student.getFullName();
}
// console.log(content)
// document.write('<ul>' + content + '</ul>');

// -----------------------------------------------------------



function globalAction() { // LE = { this }
    console.log( this ); // object?
}


const example = {
    name: 'test',
    x: globalAction
}

// example.x(); // this -> example

// globalAction(); // this -> window
// window.globalAction(); // this -> window


// const address = {
//     street: {
//         builing: 9,
//         floor: 10,
//         blabla: function() {
//             console.log(this);
//         }
//     },
//     name: 'vasya'
// }

// address.street.blabla();
// address.street.builing;


// ---------------------------------------------------
// Array funciton

let fExp = function() {};
let fArrow = () => {};

fExp = function(a, b) {};
fArrow = (a, b) => {};

fExp = function(a, b) { return a + b; };
fArrow = (a, b) => { return a + b; };

fExp = function(a, b) { return a + b; };
fArrow = (a, b) => a + b;

fExp = function(a) { return a*a*a; };
fArrow = a => a*a*a;

fExp = function(a) { 
    console.log('fExp');
    return a*a*a; 
};
fArrow = a => {
    console.log('fArrow');
    return a*a*a; 
};

// ----------------------------------------------------


fExp = function(a) { 
    console.log(arguments);
    return a*a*a; 
};
fArrow = (a) => {
    console.log(arguments); // Error

    return a*a*a; 
};

// fExp(6,67,6,7,67,67,6,7);
// fArrow();
// ------------------------------------------------------

// arrow functions and this

fExp = function(a) { 
    console.log(this);
    // this -> some object
    return a*a*a; 
};

fArrow = a => {
    console.log(this);
    return a*a*a; 
};

const fCore = function () { // fCore.LE = { this: d }
    const ins = () => { // LE = {}, ins.Scope = fCore.LE
        console.log('ins', this);
    }

    console.log(this);
    ins();
    console.log(this);
}




// d = { fExp: fExp, fArrow: fArrow, fCore: fCore }

// d.fExp();

// console.log(this); // window
// d.fArrow();
// d.fCore();

// ----------------------------------------------------------
// Array methods

const heroesList = ['Name Surname', 'Name Surname', 'Name Surname', 'Name Surname'];
// heroesList[56] = 'Name 1123123';

// console.log(heroesList)
// forEach
heroesList.forEach(function(value, index, source) {
    // if (index == 2) {
    //     return;
    // }
    // console.log(value, index);
});

document.write('<ul>' + content + '</ul>');

// map
// let result = heroesList.map(function(value, index){
//     return {
//         name: value,
//         id: index
//     }; 
// });

// console.log(result);

// Chaining
let listContent = '';
heroesList
    .map(function(value, index){
        const params = value.split(' ');
        return {
            name: params[0],
            surname: params[1],
            id: index
        }; 
    })
    .forEach(function(item) {
        listContent = listContent + getFullNameByParam(item);
    });
document.write('<br /><ul>' + listContent + '</ul>')


// filter
// const numbers = [-5, 7, -12, 7, 9, 8];
// const filterResult = numbers.filter(function(item) {
//     return item > 0;
// });
// console.log(numbers, filterResult);

// some/every

// reverse

// reduce



const films = [
    { id: 12, name: 'Name 1', price: 25 },
    { id: 13, name: 'Name 2', price: 25 },
    { id: 14, price: 19 },
    { id: 15, name: 'Name 4' },
    { id: 16, name: 'Name 5', price: 29 },
    { id: 17, price: 22 },
    { id: 18, name: 'Name 7', price: 20 },
];


const filmsContent = films
    .filter(film => film.name && film.price)
    .map(item => '<br />' + item.name + ', ' + item.price);

document.write(filmsContent.join(''));