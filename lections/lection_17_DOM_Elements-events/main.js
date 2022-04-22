console.log('Lection_17');

// DOM Events
    // focus
    // blur
    // submit

//DOM Manipulations
    // cloneNode(deep)
    // prev/nextSibling
    // insertAdjacentHTML

function multiply(value){ return value * value }

function copy(list, func) {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        const elementToPush = typeof func === 'function' ? func(list[i]) : list[i];

        result.push(elementToPush)
    }

    return result;
}

function clear(direction, k) {
    if (direction === 'column') {
        //column
    }

    if (direction === 'row') {
        // row
    }

    console.error('Pass correct direction');
}

const array = [1,2,3,4];

const copiedArray = copy(array, multiply);

const copied2 = array.map(multiply);

console.log('copied2', copied2)

console.log('copiedArray', copiedArray, array === copiedArray);

const form = document.querySelector('form');
const fieldName = document.querySelector('input[name="name"]');
const fieldCompany = document.querySelector('input[name="company"]');

const handlerClick = (event) => {
    console.log('click');

    fieldName.removeEventListener('click', handlerClick)
}


const obj = {
    a: 1,

    log(...args) {
        console.log('log', this.a, this, args);
    }
}
const obj2 = {
    a: 100000,
}

const log = obj.log;
log();

//bind, call, apply

const logBinded = obj.log.bind(obj2, 5);

console.log(logBinded === obj.log);

logBinded();
logBinded(6,7);

obj.log();

obj.log.call(obj2, 1, 2, 3);
obj.log.apply(obj2, [1, 2, 3]);

obj2.log = obj.log
obj2.log(1,2,3);
delete obj2.log;


function bind(context, func) {
    return (...args) => {
        return func.apply(context, args);
        // return func.call(context, ...args);
    }
}

const logBinded2 = bind(obj2, obj.log);


function onBlur(event) {
    const value = event.target.value;

    const validationSuccess = Array.prototype.every.call(value, (symbol) => {
        return isNaN(symbol);
    });

    // [1,2].every((symbol) => isNaN(symbol));

    console.log(validationSuccess);

    if (!validationSuccess) {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }
}

class CompanyFieldClass {
    constructor(field) {
        this.field = field;

        this.field.addEventListener('focus', this.onFocus.bind(this));
        this.field.addEventListener('blur', this.onBlur.bind(this));

        this.tooltip = document.createElement('div');
        this.tooltip.innerHTML = this.templateTooltip;
    }

    templateTooltip = `<div class="block">block to show</div>`;

    onFocus(event) {
        console.log(this);
        document.body.appendChild(this.tooltip);
    }

    onBlur(event) {
        document.body.removeChild(this.tooltip);
    }

    _name = 'old Value';
    _count = 0;

    set name(nameValue) {
        console.log('prev value', this._name);

        this._name = nameValue;
    }

    get name() {
        console.log('current value', this._name);

        return this._name;
    }

    set count(nameValue) {
        this._count = this._count + nameValue;
    }

    get count() {
        return this._count / 10;
    }
}


fieldName.addEventListener('blur', onBlur)
fieldName.addEventListener('click', handlerClick, true)


console.log(fieldName);

const companyField = new CompanyFieldClass(fieldCompany);

companyField.name = 'new company';

const currentCompanyName = companyField.name;

companyField.name = 'new company 2';

console.error(companyField.name);

companyField.count = 10;
companyField.count = 20;
companyField.count = 20;

console.log(companyField.count); // 5

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(event);
})























