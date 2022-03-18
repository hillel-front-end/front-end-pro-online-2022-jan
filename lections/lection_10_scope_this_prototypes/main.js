console.log('Lection_10');

// Global
// let example = 600;

function f() { // Scope -> f
    var x = 10;
    let y = 20;
    const z = 30;


    function f1() { // Scope -> f1
        var p = 60;

        example = 1600;
        y = 90;

        console.log(x, y, z, p, example);
    }
}

// console.log(x, y, z);


// --------------------------------------

function myName() {
    console.log(this);
}

// window.myName(); // this -> window

const user = {
    name: 'Example',
    getName: myName
}

// user.getName(); // this -> user


// ----------------------------------------


// const parent = { x: 10, city: 'Odesa' };

// const child = Object.create(parent);
// const user3 = Object.create(parent);
// // child.y = 30;

// // console.log(child)
// // console.log(child.y);
// // console.log(child.x);


// console.log(child, user3);
// console.log(child.city, user3.city);

// user3.city = 'Kyiv';
// console.log(child, user3);
// console.log(child.city, user3.city);

// console.log(user3.__proto__ === parent);

// // WRONG
// user3.__proto__.city = 'Lviv';
// console.log(child, user3);
// console.log(child.city, user3.city);


// ----------------------------------------

const parent = { name: 'Example' };
let child = { surname: 'Surname!' };

child = Object.assign(Object.create(parent), child);

// console.log(child);


// ----------------------------------------


// console.log({ u: 7778 });

const dogName = 'Boni'; // String

// console.log(new String(dogName));
// console.log( 'Test'.__proto__ === 'akfnalksf'.__proto__ );
// console.log( 'akfnalksf'.__proto__ === dogName.__proto__ );



const list = [7, 8, 9];
console.log(list);


// ----------------------

const getFValue = function() {};
console.dir(getFValue);