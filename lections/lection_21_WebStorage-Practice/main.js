console.log('Lection_21');


/*

* Форма обратной связи с сохранением введенного текста.
 
* atob - btoa хеши в localstorage
* AJAX - Essential


*/



// Practice

const INPUT_DATA_KEY = 'inputData'
const START_TIME = 'startTime'
const START_TIME_ENCODED = 'startTimeEn'

window.addEventListener('load', () => {

    const date = new Date();

    if (!sessionStorage.getItem(START_TIME)) {
        sessionStorage.setItem(START_TIME, date);
        sessionStorage.setItem(START_TIME_ENCODED, btoa(date));
    }


    const textarea = document.querySelector('#input-data')
    const send = document.querySelector('#send')

    const dataFromStorage = localStorage.getItem(INPUT_DATA_KEY);
    textarea.value = dataFromStorage ? dataFromStorage : '';

    textarea.addEventListener('input', event => {
        if (event.target.value.length > 3) {
            localStorage.setItem(INPUT_DATA_KEY, event.target.value);
        }
    })




    send.addEventListener('click', () => {
        if (textarea.value.length <= 3) {
            console.warn('Need more text');

            return;
        }

        textarea.value = '';
        localStorage.removeItem(INPUT_DATA_KEY);
        console.log('Everything is ok!');
    })


    const loadDataJSON = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `./data.json`, false);
        xhr.send();


        const dataParsed = JSON.parse(xhr.responseText);
        console.log(dataParsed);
        document.querySelector('#loaded-data').innerHTML = xhr.responseText;
    }

    document.querySelector('#load-json').addEventListener('click', loadDataJSON)

    setInterval(loadDataJSON, 2000); 
})






// AJAX

// Asynchronous Javascript and XML

// var xhr = new XMLHttpRequest();

// xhr.open('GET', './data.json', false);

// xhr.send();


// const dataParsed = JSON.parse(xhr.responseText);
// console.log(dataParsed);


// Promise

// async/await