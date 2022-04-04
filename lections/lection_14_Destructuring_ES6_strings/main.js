console.log('Lection_14');


// Desctructuring

// Object
const data = {
    x: 10,
    y: 'World',
    z: false,
    address: {
        city: 'Lviv',
        postCode: 1234,
    },
    // example: false,
};

// Old
const x = data.x;
// const y = data.y;
// const z = data.z;
// const example = data.example;
// const postCode = data.address.postCode;

// New way
let { 
    x: xOverride, 
    y, 
    z,
    address,
    address: { postCode },
    example = 'DEFAULT VALUE'
} = data;


// console.log(x, xOverride, y, z);
// console.log(address, postCode);

// console.log(example);


// ---------------------------
const actions = {
    run: function() {},
    jump() {},
    seat() {},
};

if(true) {
    const { jump } = actions;


    if (true) {
        jump();
    }
}
const DEF_ID = 99999;

// class Attraction extends ReactComponent {
//     render() {
//         const {
//             auth,
//             auth: { token = '' },
//             attraction: { id = DEF_ID, url_name, name = '', image_url, average_rating }
//         } = this.props;
//     //     return (
//     //         // Bla bla bla
//     //     );
//     // }
//     }
// }


// Array
const arr = ['p1', 'p2', 'p3', { name: 'Example', surname: 'Surname' }];

// const a = arr[0];
// const b = arr[1];
const [
    a, 
    b,
    c = true,
    person,
] = arr;

let {name, surname} = person;

// console.log(a, b, c);
// console.log(person);
// console.log(name, surname);


// Swap
let temp;

let list = [2, 6, 8, 9, 56, 34, 87];

temp = list[3];
list[3] = list[6];
list[6] = temp;

// console.log(list);

let value1 = 650;
let value2 = 1740;

[value1, value2] = [value2, value1];

// console.log(value1); // 1740
// console.log(value2); // 650


// -------------------------------------------

// spread/rest - ...


const obj1 = {
    p1: 120,
    p2: 300
};

const obj2 = {
    p4: false,
    p5: 'Hello p5',
    p1: 0,
    // ...obj1,
}

const resObj = { ...obj1, ...obj2 };

// console.log(obj1, obj2);
// console.log(resObj);


// const obj1Copy = Object.assign({}, obj1);
// const obj1Copy = { ...obj1 };

// console.log(obj1Copy);


// ... -> rest operator
function sumKeys({ p1, p2, ...allOthers }, maxLimit, flag) {
    // const { 
    //     p1, 
    //     p2, 
    //     ...allOthers
    // } = data;
    // console.log('sumKeys', p1, p2);
    // console.log(allOthers);
}


// sumKeys(resObj, 250, true);


// ------------------------------------



const params = ['p1', 'p2', 'p3', 'p4'];

function getAll(a1, a2, ...args) {
    // console.log(arguments);

    // const [a1, a2] = args;
    // console.log(a1, a2);


    // convert arguments to array
    // const args = [...arguments];
    if (args.length) {
        // console.log(args);
    }
}

// Spread
getAll('p0', ...params, 'p6');
// getAll(params[0], params[1], params[2]);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const concata1a2 = [...a1, ...a2];

// console.log(concata1a2)

// -------------------------------------

// ES 6 Template strings

const s1 = "123123";
const s2 = '123'+ '\n'
 + '123';

const s3 = `123
123`; // ES6


const value = 'Hello world!';
const value22 = 787;

const newEs6String = `Example text: ${getName({name: 'Vasya'})} ____`;

console.log(newEs6String);

function getName({name}) {
    return name;
}
// -----------


console.log(`Example obj: ${ [2, 8, 9] }`);


// ---------------------------------------------------------