// console.log('Lection_30');

// CORS
// JSONP
// express

const root = 'http://localhost:3000';

class ToDoList {
    list = [];
    root = null;

    template = ({ checked, title, id }) => `
<li ${checked ? 'class="checked"' : ''} data-id="${id}">
    ${title}
</li>`

    constructor(query) {
        // this.list = await this.getList();
        
        this.root = document.querySelector(query);

        this.root.addEventListener('click', this.onItemClick.bind(this));
    }

    async onItemClick (event) {
        if (event.target.tagName !== 'LI') {
            return;
        }

        const id = event.target.dataset['id'];

        await this.updateTodo(id, !this.getTodoById(id).checked);
        await this.getList();

        this.render();
    }

    async init() {
        try {
            await this.getList();
        } catch (e) {
            console.error('SOMETHING WENT WRONG', e);
        }

        // this.getList()
        //     .then((data) => this.list = data)
        //     .catch(e => {
        //         console.error('SOMETHING WENT WRONG', e);
        //
        //         // return Promise.reject(e);
        //     })
    }
    
    render() {
        if (!this.root) {
            return;
        }

        const html = this.list.map(this.template).join('');

        this.root.innerHTML = html;
    }

    async getList() {
        const response = await fetch(root + '/todo-list');

        this.list = await response.json();

        return this.list;
    }

    async addTodo(title) {
        const response = await fetch(root + '/todo-list', {
            method: 'POST',
            body: JSON.stringify({title}),
            headers: {
                'Content-Type': 'application/json'
            },})

        return response.json();
    }

    getTodoById(id) {
        return this.list.find(({id: todoId}) => todoId === id);
    }

    async updateTodo(id, checked) {
        const response = await fetch(root + `/todo-list/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ checked }),
            headers: {
                'Content-Type': 'application/json'
            },})

        return response.json();
    }
}

window.addEventListener('load', () => {
    const todoList = new ToDoList('#myUL');

    const input = document.getElementById('myInput');
    const button = document.querySelector('.addBtn');

    button.addEventListener('click', async () => {
        console.log(input);

        const title = input.value;

        if (!title) {
            return;
        }

        await todoList.addTodo(title);
        await todoList.getList();

        todoList.render();
        input.value = '';

        // todoList.addTodo(title)
        //     .then(() => todoList.render())
        //     .then(() => {
        //         input.value = '';
        //     });
    })

    todoList.init()
        .then(() => {
            todoList.render();
        });
});
