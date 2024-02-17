// example-1
let  user: {userName: string, userId: number};
user = {userName: "Hello", userId: 101};

// console.log(user);


// example-2
// store object only
let users: object;
users = {name: "hello world", id: "101"};


// example-3
// array of object
let usersObj: object[];
usersObj = [{name: "rakib"}, {name: "sakib"}]


// example-4
// push object
let userInfo: object[];
userInfo = [];

let user1: {user1Name: string, id: number};
user1 = { user1Name: "emon", id: 1001};
userInfo.push(user1);

let user2: {user2Name: string, id: number};
user2 = {user2Name: "Sojib", id: 1002};
userInfo.push(user2);

// console.log(userInfo);
// output
// [{
//   "user1Name": "emon",
//   "id": 1001
// }, {
//   "user2Name": "sojib",
//   "id": 1002
// }] 

for (const key in userInfo) {
    console.log(key);  // output: 0 1
    console.log(userInfo[key]); 
    // output: 
    //     0
    // {
    //   "user1Name": "emon",
    //   "id": 1001
    // } 
    //     1
    // {
    //   "user2Name": "Sojib",
    //   "id": 1002
    // } 
}
