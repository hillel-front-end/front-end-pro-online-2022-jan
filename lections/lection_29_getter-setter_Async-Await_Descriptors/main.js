// console.log('Lection_29');


/*
    https://www.geeksforgeeks.org/what-is-the-difference-between-freeze-and-seal-in-javascript/#:~:text=freeze()%20makes%20an%20object,prevent%20them%20from%20external%20changes.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
*/



// Object.seal()

// const data = { x: 10, y: 30 };
// const dataSeal = Object.seal(data);

// console.log(data === dataSeal); 
// data.z = 20;
// delete data.y;
// // data.x = 999;
// console.log(data);


// Object.freeze()

// const data2 = { x: 10, y: 30 };
// const dataFreeze = Object.freeze(data2);

// console.log(data2 === dataFreeze); 
// data2.z = 20;
// delete data2.y;
// data2.x = 999;
// console.log(data2);


// -------------------------------------------------

// getter/setter

x = 10
x++


// console.log(x);

const z = 90;
value = x / 10 * z;

/*
    z, value - set
    x, z - get
*/

const actions = {
    fullName: '',
    age: undefined,
    id: 'test id',


    // name: 'Vasya',
    get name() { // not method anymore
        return this.id
    },
    set name(newValue) {
        const [fullName, age] = newValue.split(',');
        this.fullName = fullName;
        this.age = age;
    },

    get genId() {
        // Read/write this
        // Log smth
        const newId = Math.random()*100;
        console.log('New id was generated - ', newId)

        return newId;
    },
};


// actions.name();

// console.log( actions.name )
// console.log( actions.genId )

actions.name = 'FullName,37'


// ----------------------------------------------------------

// Descriptors
// Object.defineProperty()


// const superObject = {
//     name: 'First Name',
//     age: 29,
//     // age2: 29,
// };

// Object.defineProperty(superObject, 'age2', {
//     writable: false,
//     enumerable: false,
//     configurable: true,
//     value: 29,
// })

// superObject.age2 = 90;

// console.log(superObject)

// for(let key in superObject) {
//     console.log(key);
// } 

// get/set inside defineProperty

// Object.defineProperty(superObject, 'age2', {
//     get() {
//         const newId = Math.random()*100;
//         console.log('New id was generated - ', newId)

//         return newId;
//     },
//     set(newValue) {
//         const [fullName, age] = newValue.split(',');
//         this.fullName = fullName;
//         this.age = age;
//     }
// })


// -------------------------------------------

// Async/await



// const asyncAction = Promise.resolve([5, 8, -7, 9]);

// 5s
const asyncAction = new Promise((resolve, reject) => {
    setTimeout(() => reject([5, 8, -7, 9]), 2000);
})


// Promise way
asyncAction
    .then(data => data.filter(val => val > 0))
    .then(filteredData => console.log(filteredData)) // infrom user
    .catch((error) => {
        console.error('My error:', error);
    })


// Promise + async/await way
async function init() {
    console.log('Before await')
    // after 5s
   
    try {
        const data = await asyncAction;

        console.log('After await')
        const filteredData = data.filter(val => val > 0)
    
        console.log(filteredData); // infrom user
    } catch (error) {
        console.error('My error:', error);
    }
}

console.log('Before init')
init();
console.log('After init')



// --------------------


// async function parallelRun() {
//     const allData = await Promise.all([asyncAction, asyncAction, asyncAction]);
//     console.log(allData);
// }

// parallelRun();

// ---------------------


