let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivate: boolean;

userId = 123;
firstName = "Hello";
lastName = " World";
isActivate = true;

fullName = firstName.concat(lastName);

console.log(`Your userId is: ${userId}, name is: ${fullName}, accountActivated: ${isActivate}`);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display() {
    console.log("this function use only for display.")
}

display();
