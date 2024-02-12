// let fruits = ["Mango", "Orange", "Banana", "Lemon", "Tamarind"]

// let fruits: string[];  // etau use kora jay, abar nicher line er taw use kora jay. j kono ekta korlei hobe. eta holo 'array' declaration

let fruits: Array<string>
fruits = ["Mango", "Orange", "Banana", "Lemon", "Tamarind"];

console.log("fruits: ", fruits[3]);

// array sorting same like as js
fruits.sort();
console.log("after sort: ", fruits);


// array multiple data type store in single variable
let multipleType: (string | number) [];

multipleType = [1, "White", "Red", 3, 8];
console.log("multiple: ", multipleType[2]);
