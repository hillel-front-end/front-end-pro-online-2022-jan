/*

SOLID

S: Single Responsibility Principle (Принцип единственной ответственности).
O: Open-Closed Principle (Принцип открытости-закрытости).
L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).
I: Interface Segregation Principle (Принцип разделения интерфейса).
D: Dependency Inversion Principle (Принцип инверсии зависимостей).

*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function (speed) {
        console.log('Run with speed - ', speed);
    };
    return Animal;
}());
var dog = new Animal();
dog.run(23);
