console.log('Lection_19');

// DOM Events

// https://javascript.info/article/bubbling-and-capturing/eventflow.svg
// https://domevents.dev/

const container = document.querySelector('.container');
const block = document.querySelector('.block');



// function handler(event) {
//     console.log('Click', this);

//     // event.stopPropagation();
// }

// block.addEventListener('click', function(event) {
//     event.stopPropagation();
// });

// document.addEventListener('click', () => {
//     container.classList.add('hide');
// });

// container.addEventListener('click', handler);


document.addEventListener('copy', function(event) {
    console.log('Copy');
    event.stopPropagation();
    event.preventDefault();
}, true);

const menu = document.querySelector('.contextmenu');
document.addEventListener('contextmenu', function(event) {
    console.log('contextmenu');

    event.preventDefault();


    menu.classList.add('active');
    menu.style.left = `${event.clientX + 5}px`;
    menu.style.top = `${event.clientY + 5}px`;
});

document.addEventListener('click', () => {
    menu.classList.remove('active');
});