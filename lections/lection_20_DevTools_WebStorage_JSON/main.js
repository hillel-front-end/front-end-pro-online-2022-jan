console.log('Lection_20');


// Local Storage

console.log(window.localStorage);

// { counter: ?number?, counter_2: ?number? }

if (!localStorage.indicator) {
    localStorage.indicator = JSON.stringify({
        counter: 0
    })
}

const indicatorParsed = JSON.parse(localStorage.indicator);

document.querySelector('#count').innerHTML = indicatorParsed.counter;

document.querySelector('#clicker').addEventListener('click', () => {
    let indicatorParsed = JSON.parse(localStorage.indicator);
    indicatorParsed.counter = indicatorParsed.counter + 1;


    localStorage.indicator = JSON.stringify(indicatorParsed);
    document.querySelector('#count').innerHTML = indicatorParsed.counter;
});


// Session Storage

console.log(window.sessionStorage);



// Object storing + JSON

const data = {
    x: 10,
    t: 50
};


// localStorage.setItem('exampleArray', [6,7,7,74,4,73,437]);
// localStorage.setItem('exampleBoolean', false);
// localStorage.setItem('exampleData', JSON.stringify(data));

const parsedData = JSON.parse(localStorage.exampleData);
console.log(parsedData);

/*
    JSON.stringify(Instance);
    Instance -> to string


    String -> instance
    JSON.parse(String);
*/




// const jsonExample = ``;
// const jsonExample = `[]`;
// const jsonExample = `{}`;
// const jsonExample = `[1, 3, 4, 5, 6]`;
// const jsonExample = `{ "x": 10, "y": 20, "streetName": "Bla bla street" }`;



