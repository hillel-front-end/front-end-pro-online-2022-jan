// console.log('Lection_23');


// Blocking

// document.querySelector('#click')
//     .addEventListener('click', () => {
//         console.log('click'); 
//     })

// setTimeout(() => {
//     console.log('Timer');
// }, 1000);


// console.log('Start');
// // 3s
// for (let i = 0; i <= 200000; i++) {
//     if (i === 879) {
//         alert();
//     }
//     console.log(i);
// }

// console.log('End');


// Promises



const async = new Promise((resolve, reject) => {
    const val = Math.random();

    if (val > 0.5) {
        resolve();
    }

    reject();
});


// pending

// resolved
// reject 

async
    .then(onSuccess)
    .catch(onFail)



function onSuccess() {}
function onFail() {}


// --------------------------------
// Few async processes

const async1 = Promise.resolve(55);
const async2 = Promise.resolve(123);
// const async3 = Promise.reject(9999);


// Bad
async1.then(onSuccess);
async2.then(onSuccess);


// Option #1 - not good way

async1.then((val1) => {
    async2.then((val2) => {
        // console.log('val1 val2', val1, val2);
    })
})

// Option #2 - also not good way

async1
    .then((val1) => {
        // console.log('val1', val1);

        return async2;
    })
    .then((val2) => {
        // console.log('val2', val2);
    })


// New technologies!

// Promise.all()
const listOfAsyncActions = [
    async1, // 5s
    async2, // 7s
    // async3,
];


// Promise
//     .all(listOfAsyncActions)
//     // after 7 sec
//     .then((result) => {
//         console.log('All results:', result)
//     })
//     .catch((result) => {
//         console.log(result)
//     });

// Promise
//     .allSettled(listOfAsyncActions)
//     // after 7 sec
//     .then((result) => {
//         console.log('All results:', result)
//     });



// Promise.race()

// const asyncR1 = new Promise((resolve) => {setTimeout(() => {resolve(23)}, 1000)})
// const asyncR2 = new Promise((resolve) => {setTimeout(() => {resolve(29)}, 500)})


// Promise
//     .race([asyncR1, asyncR2])
//     .then((result) => {
//         console.log('Race result:', result)
//     });


// --------------------------------
// Promises extra

// const promise1 = Promise.resolve(150);

// promise1
//     .then((v1) => {
//         console.log('t1', v1)

//         // return v1;
//         // return Promise.resolve(v1);
//         if (v1 > 100) {
//             return Promise.reject('Error msg');
//         }

//         return v1;
//     }, (v1Error) => {
//         console.log('v1Error', v1Error)

//         return v1Error;
//         // return Promise.resolve(v1Error);
//     })
//     .then(
//         (v2) => console.log('t2', v2), 
//         (error) => {
//             console.log('Error t2: ', error);

//             return 999
//         }
//     )
//     .then(v3 => console.log(v3));
    // .catch((error) => console.error('My catch:', error))


// console.log('m1');
// const p1 = new Promise((resolve) => {
//     console.log('m2');

//     setTimeout(() => {
//         resolve()
//     }, 500)
// })

// console.log('m3');
// p1.then(() => {
//     console.log('m4');

//     return new Promise((resolve) => {
//         console.log('m5')
//         setTimeout(() => {
//             resolve();
//         },1000)
//     })
// })
// .then(() => console.log('m6'));




// AJAX + Promises




const xhr = new XMLHttpRequest();
// xhr.readyState === 0

// GET
// POST
xhr.open('GET', 'https://getweatherpleaseme.com/weather/current', true) // 5s
// xhr.readyState === 1
// false - sync mode
// true - async mode

xhr.send();
// xhr.readyState === 2


// Receving response
// xhr.readyState === 3
// xhr.readyState === 3
// xhr.readyState === 3
// ...
// xhr.readyState === 3


// Finish receving response
// xhr.readyState === 4

xhr.addEventListener('readystate', () => {
    // console.log(xhr.readyState);
    // 0 - 4
    if (xhr.readyState !== 4) {
        return;
    }

    console.log(xhr.responseText);
})


// Let's promisify it


function loadWeather(p1) {
    return new Promise((resolve) => {
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', `https://getweatherpleaseme.com/weather/current/${p1}`, true)
    
        xhr2.send();
        xhr2.addEventListener('readystate', () => {
            if (xhr2.readyState !== 4) {
                return;
            }
            resolve(xhr2.responseText);
        })
    });
}


loadWeather('').then(weatherData => console.log(weatherData));

// ES6 Fetch



function loadMyWeather(p1) {
    return fetch(`https://getweatherpleaseme.com/weather/current/${p1}`).then(resp => resp.json())
}

loadMyWeather('').then();
