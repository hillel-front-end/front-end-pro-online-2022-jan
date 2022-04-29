


const menuActions = [
    { title: "Copy", id: 'a1' },
    { title: "Paste", id: 'a2' },
    { title: "Delete", id: 'a3' }
];

const menuHandlers = {
    a1: () => console.log('Copy'),
    a2: () => console.log('Paste'),
    a3: () => console.log('Delete'),
};


document.addEventListener('contextmenu', event => {
    event.preventDefault();

    const menu = document.querySelector('.custom-menu');

    menu.style.left = `${event.clientX + 10}px`;
    menu.style.top = `${event.clientY + 10}px`;


    if (menu.children.length != menuActions.length) {
         // Prepare items
        menu.innerHTML = `${ menuActions.map((item) => `<div class="item" data-id="${item.id}">${item.title}</div>`).join('') }`;
    }
    menu.classList.add('active');
});

document.addEventListener('click', () => {
    const menu = document.querySelector('.custom-menu');

    menu.classList.remove('active');
})


window.addEventListener('load', () => {
    const menu = document.querySelector('.custom-menu');

    menu.addEventListener('click', function(event) {
        const id = event.target.dataset.id;

        // console.log(id);
        // const result = menuActions.find(item => item.id === id); // SUPER BAD

        if (!menuHandlers[id]) {
            return console.warn('No handlers for id - ', id);
        }

        menuHandlers[id]();
    })
}); 

