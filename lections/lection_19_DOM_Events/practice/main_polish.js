class MenuActions {
    constructor(list, handlers, menuContainer, targetContainer = document) {
        this.handlers = handlers;
        this.menuContainer = menuContainer;
        this.targetContainer = targetContainer;

        // Render
        this.prepareItems(list);
        this.initHandlers();
    }

    prepareItems(source) {
        this.menuContainer.innerHTML = `${ source.map((item) => `<div class="item" data-id="${item.id}">${item.title}</div>`).join('') }`;
    }

    enable() {
        this.menuContainer.classList.add('active');
    }

    disable() {
        this.menuContainer.classList.remove('active');
    }

    positioning(x, y) {
        this.menuContainer.style.left = `${x}px`;
        this.menuContainer.style.top = `${y}px`;
    }

    initHandlers() {
        // Events
        this.targetContainer.addEventListener('contextmenu', event => {
            event.preventDefault();
            event.stopPropagation();
        
            this.positioning(event.clientX + 10, event.clientY + 10);
            this.enable();
        });


        // Click on menu item
        this.menuContainer.addEventListener('click', (event) => {
            const id = event.target.dataset.id;

            if (!this.handlers[id]) {
                return console.warn('No handlers for id - ', id);
            }
    
            this.handlers[id](this.targetContainer);
        });


        // Hide
        document.addEventListener('click', () => {
            this.disable();
        })
    }
}

window.addEventListener('load', () => {
    const list = [
        { title: "Copy", id: 'a1' },
        { title: "Paste", id: 'a2' },
        { title: "Delete", id: 'a3' }
    ];
    
    const menuHandlers = {
        a1: () => console.log('Copy'),
        a2: () => console.log('Paste'),
        a3: () => console.log('Delete'),
    };
    const menu = document.querySelector('.custom-menu');
    new MenuActions(list, menuHandlers, menu);


    // for block
    const blockList = [
        { title: "Change color", id: 'b1' },
        { title: "Delete", id: 'b2' }
    ];
    
    const blockMenuHandlers = {
        b1: (domElement) => domElement.style.backgroundColor = 'blue',
        b2: (domElement) => domElement.remove(),
    };
    const block = document.querySelector('.block');
    const blockMenu = document.querySelector('.block-menu');
    new MenuActions(blockList, blockMenuHandlers, blockMenu, block);
});