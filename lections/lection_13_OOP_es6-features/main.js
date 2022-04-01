console.log('Lection_13');


// Class Animal
// function Animal(p1, p2) {
//     this.p1 = p1; // Поля класса
//     this.p2 = p2;
// }

// // Поведением
// Animal.prototype.run = function() {
//     // ...
// };



// test - представитель класса Animal / экземпляр класса Animal
// const test = new Animal('hello', 2234);
// console.log(test);


// ----------------------------------
// ES6 Class

// class Parent {
//     constructor(p1, p2) {
//         this.p1 = p1; // Поля класса
//         this.p2 = p2;
//     }

//     run() {}
// }


// const p1 = new Parent('hello', 2234);
// console.log(p1);

// Наследование

// class Car {
//     constructor(doors = 4){
//         this.wheels = 4;
//         this.doors = doors;
//     }

//     run() {
//         console.log('run');
//     }
// }

// class Toyota extends Car {
//     constructor(p1 = 10, p2 = false, doors = 4) {
//         super(doors);
//         this.brand = 'Toyota';
//         this.p1 = p1;
//         this.p2 = p2;
//     }

//     jump() {
//         console.log('jump');
//     }
// }

// class Audi extends Car {
//     constructor(p) {
//         super(p);

//         this.brand = 'Audi';
//     }
//     seat() {
//         console.log('seat');
//     }
// }

// const c1 = new Toyota('Supra', 23, 2);
// const c2 = new Audi();

// console.log(c1);
// console.log(c2);

// c1.run();
// c1.jump();

// c2.run();
// c2.seat();



// Инкапсуляция
// function Animal() {
//     let id = 23 + Math.floor(Math.random()*20);

//     this.getId = function() {
//         return id;
//     }

//     this.updateId = function() {
//         id = 23 + Math.floor(Math.random()*20);
//     }
// }

// const a1 = new Animal();

// console.log(a1, a1.getId());
// a1.updateId();
// console.log(a1, a1.getId());


// class Car {
//     // Инкапсуляция
//     #p2 = 600;

//     #getRand() {
//         return Math.floor(Math.random()*20);
//     }

//     constructor(p1) {
//         this.p1 = p1 + this.#getRand();
//     }

//     getP2() {
//         return this.#p2;
//     }

//     setP2(value) {
//         this.#p2 = value;
//     }
// }


// const c1 = new Car('P1 Value');

// console.log(c1);
// console.log(c1.p1, c1.getP2());
// c1.setP2(25);
// console.log(c1.p1, c1.getP2());


// Полиморфизм

// function Person() {}

// Person.prototype.speed = 10;
// Person.prototype.getSpeed = function() {
//     return this.speed;
// }

// const p1 = new Person();
// const p2 = new Person();

// console.log( p1.getSpeed() );
// p1.speed = 15;
// console.log( p1.getSpeed() );

// ---------------------------------------------------