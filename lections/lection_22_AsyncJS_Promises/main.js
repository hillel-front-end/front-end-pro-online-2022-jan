// console.log('Lection_22');



// const x = 10;

// const time = performance.now();
// setTimeout(() => {
//     console.log('TIMER', performance.now() - time); 
//     // ~500ms
// }, 500)


// console.log(time);
// for (let i = 1; i <= 99999; i++) {
//     console.log(i);
// }
// console.log(performance.now() - time);
// console.log('After');

// -----------------

// Browser API
// setTimeout(() => {
//     console.log('Timer');
// }, 0);

// function f() { // Execution Context
//     // Param, Scope, Closure
//     console.log('In f');

//     f2();
// }

// function f2() { // Execution Context
//      console.log('In f2')
// }

// console.log('Before');

// f();

// console.log('After');

// for (let i = 1; i <= 99999; i++) {
//     console.log(i);
// }




// -----------------------------------------

// Promise

// const promise = new Promise(function(resolve, reject) {
//     console.log('My promise....');

//     setTimeout(() => {
//         console.log('Timer');
//         resolve();
//     }, 2000);
// });


// promise
//     .then(resultPromiseTest, rejectedResult)
//     .then(resultPromiseTest)
//     .catch(() => {
//         console.log('Catch');
//     })


// function resultPromiseTest() {
//     console.log('resultPromiseTest');
// }

// function rejectedResult() {
//     console.log('rejectedResult');
// }



// const getData = new Promise((resolve) => {
//     xhr.open('GET', '/asdasd.json', true);
//     xhr.send(); // 2s

//     xhr.onreadystatechange = () => {
//         resolve( xhr.responseText );
//     }
// });


// getData
//     .then((data) => {
//         console.log('Data manipulation', data);
//     })
//     .catch(() => {
//         console.error('Sorry!')
//     })


// ---------------------------------------------

const asyncProcess = new Promise((resolve, reject) => {
    // async

    const value = Math.floor(Math.random()*10)

    // if (value > 5) {
    //     resolve(value);
    // }
    // reject(value);

    resolve(value);
    // reject(value);
})


// asyncProcess
//     .then(
//         (x) => {
//             console.log(x);
//         }, 
//         (y) => console.warn(y)
//     )
//     .then((x) => {
//         console.log('Second then', x);
//     });

asyncProcess
    .then(
        (x) => {
            console.log(x);


            // return Promise.resolve(x*2);
            return Promise.resolve(x*2);
        }, 
        (y) => {
            console.log('Rejected 1:', y);

            return Promise.reject(y);
        }
    )
    // .catch(() => {
    //     console.warn('Catched')
    // })
    .finally(() => {
        console.log('finally');
    })