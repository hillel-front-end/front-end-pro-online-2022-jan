// DOM - Document Object Model

console.dir(document);

document.querySelector('#title').style.color = 'red';

const paragraph = document.querySelector('.parag');

setInterval(() => {
    paragraph.style.color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
}, 200);




function getColor() {
    return Math.floor(Math.random()*256);
}