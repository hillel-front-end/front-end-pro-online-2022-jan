console.log('Lection_16');

// DOM Manipulations

// Create
// const block = document.createElement('div');

// block.classList.add('block', 'active');
// block.innerHTML = 'P2';
// block.style.color = 'brown';

// console.dir(block);

// let p1 = document.querySelector('.block');
// console.dir(p1);


// // Insert
// const container = document.querySelector('.container');

// setTimeout(() => {
//     container.appendChild(block);
// }, 2000);


// // Remove
// p1.remove();

// console.dir(p1);




// ---------------------------------------------------
// Render List

const names = [
    'Name 1',
    'Name 2',
    'Name 3',
    'Name 4',
];

if (names.length) {
    // const ulContainer = document.createElement('ul');

    // ulContainer.id = 'name_container';

    // names.forEach((name) => {
    //     const li = document.createElement('li');

    //     li.innerHTML = name;
    //     ulContainer.appendChild(li);
    // });

    // document.body.appendChild(ulContainer);
}

// ---------------------------------------

const data = [
    { type: 'item', text: 'N 1' },
    { type: 'item', text: 'N 2' },
    { type: 'menu', items: [
            { type: 'item', text: 'NNN 1' },
            { type: 'item', text: 'NNN 2' }
        ]
    },
    { type: 'item', text: 'N 3' },
];

class OurRenderer {
    static renderDeepList(target, source) {
        if (!target || source.length === 0) {
            return;
        } 

        // Root <ul>
        const element = document.createElement('ul');

        source.forEach((elem) => {
            if (elem.type === 'item') {
               this.createLiElem(element, elem.text);
            }
            if (elem.type === 'menu') {
                // 2-Level <ul>
                const ul2Level = document.createElement('ul');

                elem.items.forEach((innerElem) => {
                    if (innerElem.type === 'item') {
                        this.createLiElem(ul2Level, innerElem.text);
                    }

                    // Recursion - TBD
                    if (elem.type === 'menu') {}
                });

                element.appendChild(ul2Level);
            }
        });

        target.appendChild(element);
    }

    static createLiElem(target, content) {
        const li = document.createElement('li');
        
        li.classList.add('li-item');
        li.innerHTML = content;
        target.appendChild(li);
    }

    static renderList(target, source = []) {
        if (!target || source.length === 0) {
            return;
        }

        // Creation
        const element = document.createElement('ul');

        source.forEach((name) => {
            // Creation
            const li = document.createElement('li');

            // Editing
            li.classList.add('li-item');
            li.innerHTML = name;


            // Insertion
            element.appendChild(li);
        });

        // Insertion
        target.appendChild(element);
    }
}

OurRenderer.renderDeepList(document.body, data);

// OurRenderer.renderList(document.body, ['N 1', 'N 2']);
// OurRenderer.renderList(document.querySelector('.block'), [4, 8, 9, 6, 7]);



