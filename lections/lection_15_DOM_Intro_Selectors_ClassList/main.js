console.log('Lection_15');

// document === DOM API


window.onload = function() {
    // Access to element
// const title = document.getElementById("my-title");

// const descs = document.getElementsByClassName("my-desc");

// console.dir(title);
// console.dir(descs);

// setTimeout(() => {
//     // code
//     for(let i = 0; i < descs.length; i++) {
//         console.log(descs[i].innerHTML);

//         descs[i].innerHTML += '___________'
//     }
// }, 2000);


// Selectors

// document.querySelector();
// document.querySelectorAll();

const title = document.querySelector('#my-title');
const desc1 = document.querySelector('.my-desc');

const descs = document.querySelectorAll('.my-desc');

// console.dir(title);
// console.log(desc1);

// console.log(descs);

// Old code
// for(let i = 0; i < descs.length; i++) {
//     console.log(descs[i].innerHTML);

//     descs[i].innerHTML += '___________'
// }

// New code
descs.forEach((item) => {
    item.innerHTML += '___________';
});


// --------------------------------------------

// Class
// let rightBlock = document.querySelector('.right');
// console.dir(rightBlock);


// Old approach
// setTimeout(() => {
//     rightBlock.className += ' active';
// }, 2000);

// setTimeout(() => {
//     // console.log(rightBlock.className);
//     // rightBlock.className += ' active';
// }, 4000);

// New approach

// setTimeout(() => {
//     rightBlock.classList.add('active');
// }, 2000);

// setTimeout(() => {
//     rightBlock.classList.remove('active');
// }, 4000);

// console.log(rightBlock.classList.contains('test-savelii'));

// // classList.toggle()

// rightBlock.classList.toggle('example');
// setTimeout(() => {
//     rightBlock.classList.toggle('example');
// }, 2000);


// Style

// Inline styles
// let rightBlock = document.querySelector('.right');
// console.dir(rightBlock);

// setTimeout(() => {
//     rightBlock.style.fontSize = `${40+20}px`;
//     rightBlock.style.marginLeft = '23px';
// }, 2000);


// const computedStyles = window.getComputedStyle(rightBlock);

// console.log(computedStyles)


// console.log(rightBlock.style.cssText);
// rightBlock.style.cssText += 'font-weight: bold;'

}



// ---------------------------------------------------


// Events

// debugger;

window.onload = function(){
    // debugger;
    console.log('onload');
}
