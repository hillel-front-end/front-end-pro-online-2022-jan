// // npm install -g typescript
// // Type
// const d: number = 123;

// type PropertyType = 'house' | 'condo' | 'cafe';

// type PropertyCoords = {
//     position: {
//         lat: number;
//         lng: number;
//     }
// }

// type AddressType = { 
//     city: string; 
//     post: number;
//     houseNumber: number | undefined | null;
//     type: PropertyType;

//     street?: string;
// };

// type PropertyModel = AddressType & PropertyCoords;

// const address: PropertyModel = {
//     city: 'Kyiv',
//     post: 27563,
//     houseNumber: undefined,
//     type: 'cafe',
//     position: {
//         lat: 123,
//         lng: 123
//     }
// }

// // if (address.street) {
// //     address.street.substring(1, 3);
// // }
// // address.street?.substring(1, 3);



// // Interface

// interface AnimalBehaviour {
//     run: () => undefined
// }

// interface AnimalSize {
//     weight: number;
//     length: number;
// }

// interface Crocodile extends AnimalSize, AnimalBehaviour {
//     color: string;
// }

// const crocodile: Crocodile = {
//     color: 'green',

//     weight: 120,
//     length: 3,

//     run: () => undefined
// }



// // ----------------------

// type Dog = { bark: boolean; x?: number }
// type Parrot = { fly: boolean; y?: number }


// let pet: Dog | Parrot = { fly: true }

// pet = { bark: false }



// // class + interfaces

// type RandValueReturnType = string | number | undefined;

// interface ISuperMath {
//     getRandValue: (from: number, to: number) => number;
// }

// class SuperMath implements ISuperMath {
//     getRandValue(from: number, to: number): number {
//         return (Math.floor(Math.random())*(to - from) + from);
//     }
// }


// // Generics

// type MixedArrayItem = number | string | boolean | object | undefined;

// function mergeArrays<FirstList, B>(a: FirstList[], b: string[], c: (MixedArrayItem | B)[]) {
//     return [...a, ...b, ...c];
// }

// mergeArrays<number | string, string>(
//     [1, 2, 3, 'asd'],
//     ['Hello', 'World', '!'],
//     [1, 'false', true, {x: 10}]
// );

// mergeArrays<boolean, null>(
//     [false, true, false],
//     ['Hello', 'World', '!'],
//     [1, 'false', true, {x: 10}, null]
// );


// const list: Array<string> = [];


type ExampleType = 'v1' | 'v2';
type SecondType = 120 | 150 | 180;


function getConcatOrSum<AType = ExampleType, BType = ExampleType>(a: AType, b: BType) {
    return a + '_' +  b;
}


let a: ExampleType | SecondType = 'v1';
let b: ExampleType | SecondType = 120;

let res = getConcatOrSum<ExampleType, SecondType>(a, b);
console.log(res);

a = 150;

res = getConcatOrSum<SecondType, SecondType>(a, b);
console.log(res);

// Generics + Promise


let async: Promise<number[]>;



async = new Promise<number[]>((resolve, reject) => {
    setTimeout(() => resolve([2, 6, 7, 8]), 1000);
});

async.then(data => data.filter(item => item > 5));




// React + TS app