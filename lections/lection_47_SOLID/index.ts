/*

SOLID

S: Single Responsibility Principle (Принцип единственной ответственности).
O: Open-Closed Principle (Принцип открытости-закрытости).
L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков).
I: Interface Segregation Principle (Принцип разделения интерфейса).
D: Dependency Inversion Principle (Принцип инверсии зависимостей).

*/

import { resolvePath } from "react-router-dom";



// Single Responsibility Principle
// class Animal {
//     constructor(behaviourOvveride) {
//         this.behaviourOvveride = behaviourOvveride;
//     }

//     run() {
//         if (this.behaviourOvveride && this.behaviourOvveride.run) {
//             return this.behaviourOvveride.run()
//         }

//         console.log('Normal run');
//     }
//     jump() {}
// }


// class AnimalT extends Animal {
//     prepareToT(){}
//     runOnT(){}
// }


// class TAnimalService {
//     run() {
//         console.log('Tournament run');
//     }
// }

// const dog = new Animal(new TAnimalService());
// dog.run();


// T - run
// const dogT = new AnimalT();


// ----------------------------------

// Open-Closed Principle
// class Animal {
//     speed = 0;
//     run() {
//         const speed = this.speed;

//         console.log('Running. Speed - ', speed);
//     }
// }

// class Dog extends Animal {
//     speed = 20;
// }

// class Bird extends Animal {
//     speed = 20;

//     fly() {}
//     run() {
//         console.error("I can't run.");
//     }
// }


// class Cat extends Animal {
//     speed = 15;
// }

// class Snake extends Animal {
//     speed = 3;
// }


// class Monkey extends Animal {
//     speed = 12;
// }

// // Extension
// class Rat extends Animal {
//     speed = 4;
// }


// new Dog().run()
// new Cat().run()
// new Snake().run()
// new Monkey().run()
// new Rat().run()
// new Bird(true).run()


// -----------------------------------
// Liskov Substitution Principle


// class Animal {
//     speed = 0;
//     getSpeed() {
//         return this.speed;
//     }
// }

// class Dog extends Animal {
//     speed = 20;
//     // getSpeed = undefined;

//     run(){}
    
// }

// const animal = new Animal();
// const dog = new Dog();

// console.log( animal.getSpeed() );
// console.log( dog.getSpeed() );
// // const dog2 = dog as Animal;


// -------------------------------------------------
// Interface Segregation Principle

// Root
// interface PetVisits {
//     visitToDoctor?(): void;
// }

// // Specified by type
// interface DogVisits extends PetVisits {
//     visitToGrooming?(): void;
// }

// interface BirdVisits extends PetVisits {
//     visitTonature?(): void;
// }

// Basic behaviour
// interface IDog {
//     run(speed): void;
//     jump(): void;
//     seat(): void;
//     eat(): void;
// }

// class Dog implements IDog, DogVisits {
//     run(speed) {
//         console.log('Run with speed - ', speed);
//     }
//     jump(): void {}
//     seat(): void {}
//     eat(): void {}

//     visitToDoctor(): void {}
//     visitToGrooming(): void {}
// }

// const dog = new Dog();
// dog.run(23)


//  Dependency Inversion Principle
/*

Принцип формулюється наступним чином:

* Модулі вищого рівня не повинні залежати від модулів нижчого рівня. Обидва типи модулів повинні залежати від абстракцій.
* Абстракції не повинні залежати від деталей реалізації. Деталі реалізації повинні залежати від абстракцій.

*/

interface IAPIConnectionService {
    
}

interface IHTTPConnectionService extends IAPIConnectionService {
    get(url: string): Promise<string>;
}
class HTTPConnectionService implements IHTTPConnectionService {
    get(url: string): Promise<string> {
        return fetch(url).then(resp => resp.json())
    }
}

interface IWSConnectionService extends IAPIConnectionService {
    get(event: string, data: string): Promise<string>;
}
class WSConnectionService implements IWSConnectionService {
    get(event: string, data: string): Promise<string> {
        return new Promise((resolve, reject) => {
            ws.send(event, data);
            ws.on('event', (data) => {
                resolve(data);
            });
        });
    }
}

interface IFSConnectionService extends IAPIConnectionService {
    get(event: string, data: string): Promise<string>;
}
class FSConnectionService implements IWSConnectionService {
    get(event: string, data: string): Promise<string> {
        return fs.readFile();
    }
}


interface IAPI {
    get(): Promise<unknown>;
}

class API implements IAPI {
    connectionService: any = null;
    constructor(connectionService: IAPIConnectionService) {
        this.connectionService = connectionService;
    }
    get(): Promise<string> {
        return this.connectionService.get();
    }
}


new API(new HTTPConnectionService());
new API(new WSConnectionService());
new API(new FSConnectionService());