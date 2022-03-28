console.log('Lection_12');

class Car {
    #distance = 0;

    constructor(params = {}, additionalParams) {
        this.model = params.model;
        this.color = params.color;
        this.year = params.year;

        console.log('additionalParams', additionalParams)
    }

    changeColor(colorToSet) {
        this.color = colorToSet;

        console.log('changeColor CAR', colorToSet);
    }

    drive(distance) {
        this.#distance += distance;
    }

    checkStatus() {
        console.log(this.#checkPrivateStatus());

        return this.#distance;
    }

    #checkPrivateStatus() {
        return this.#distance - 1000;
    }
}

const myCar = new Car({
    model: 'Toyota',
    color: 'gray',
    year: 2022
}, {
    width: 200,
    weight: 4
});

myCar.changeColor('red');

/*
console.log(myCar);

myCar.changeColor('red');

myCar.drive(1000);

console.log(myCar);

console.log('checkStatus', myCar.checkStatus());

myCar.drive(1000);
myCar.drive(1000);
myCar.drive(1000);

console.log('checkStatus', myCar.checkStatus());

myCar.distance = 2000;

console.log('checkStatus', myCar.checkStatus());

myCar.drive(1000);

console.log('checkStatus', myCar.checkStatus());
*/

class Bike extends Car {
    #distance = 1000;

    constructor(params) {
        params.model = 'bike-' + params.model;

        super(params);

        this.tires = params.tires;
    }

    changeColor(colorToSet) {
        super.changeColor('bike-' + colorToSet);

        console.log('MODIFIED CHANGE COLOR BIKE', 'bike-' + colorToSet)
    }

    changeBikeColor(colorToSet) {
        this.changeColor(colorToSet);

        console.log('CHANGE COLOR BIKE', colorToSet)
    }

    driveFast(distance) {
        this.drive(distance * 2);
    }
}

const myBike = new Bike({
    model: 'Kawasaki',
    color: 'black',
    year: 2000,
    tires: 2
})

// console.log('myBike', myBike);
//
// myBike.driveFast(1000)
// myBike.changeBikeColor('red')
//
// console.log('myBike', myBike);
// console.log('myBike checkStatus', myBike.checkStatus());

const obj1 = {
    a: 'a'
}
const obj2 = {
    b: 'b'
}

const obj3 = Object.assign({}, obj1, obj2);

console.log('obj3', obj3, 'obj1', obj1, 'obj2', obj2);

//---------------------------------


function constructor({model, color, year, tires}, obj2) {
// function constructor(params) {
    // const model = params.model;
    // const color = params.color;
    // const year = params.year;

    // let {model, color, year, tires} = params;

    const {
        propertyName: changedNameProperty,
        nonsenseProperty = 'bbb',
        property: prop = 'default',
        ...restProperties
    } = obj2;

    const {...copy} = obj2;

    const copySpread = {...obj2}

    const objCopyFailed = obj2;

    // console.log(copy, copySpread, obj2);

    // console.log(objCopyFailed === obj2); // true
    // console.log(copy === obj2); // false

    model = '3453'

    // console.log(restProperties);

    // console.log(model, color, year);
    // console.log(tires);
    // console.log(changedNameProperty);
    // console.log(nonsenseProperty);
    // console.log(prop);
}

constructor({
    model: 'dfgdfgd',
    color: 'dfgdfgdfgsdf',
    year: 202345,
    tires: 343
}, {
    propertyName: 'aaaaa',
    property: 'not default',
    newProperty: 'newProperty'
})


// class Animal {
//     constructor({ sex, type }) {
//         this.sex = sex;
//         this.type = type;
//     }
// }
// class Bird extends Animal {
//     constructor({ wings, ...restProps }) {
//         super(restProps);
//
//         this.wings = wings;
//     }
// }
//
// const bird = new Bird({
//     wings: 2,
//     sex: 'male',
//     type: ''
// })

function f(first, second, ...args) {
    console.log('args', args);
    console.log('arguments', arguments);
}

const f2 = (...args) => {
    console.log('f2 args', args);

    // args - array

    const changedArgs = [-1, 0, ...args];

    const [first, second, , ...rest] = args;

    console.log(first);
    console.log(second);
    console.log(rest); // 4,5,6,7

    const {0: firstObj} = args;

    console.log(firstObj);
    // console.log(...changedArgs);
    // console.log(1,2,3,4,5,6,7);
    // console.log(args[0], args[1], args[2]);
}

f(1,2,3,4,5,6,7);
f2(1,2,3,4,5,6,7);


const deepObject = {
    obj: {
        deepObj: {
            a: 'deepValue'
        }
    }
}

const {
    obj: {
        deepObj: {
            a: value,
            ...restDeepObj
        },
        ...restObj
    },
    ...restRootObj
} = deepObject;

console.log('value', value);

function traverse(root, callback) {
    if (!root.children) {
        return
    }

    if (callback) {
        callback(root)
    }

    for (let i = 0; i < root.children.length; i++) {
        traverse(root.children[i], callback)
    }
}

traverse({
    children: [{
        value: 'value',
        children: [{
            value: 'deep'
        }]
    }, {
        value: 'value'
    }]
})
