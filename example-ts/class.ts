class User {
    userName: string;
    age: number;

    constructor (userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}
let user1 = new User ("creating class", 1001);
user1.display();

let user2 = new User ("creating class2", 1002);
user2.display();
