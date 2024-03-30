type user = {userName: string; userId: number};

let users: user[];
users = [];

let user1 : user;
user1 = {userName: "Hello", userId: 101};
users.push(user1);

let user2 : user;
user2 = {userName: "Hello2", userId: 102};
users.push(user2);
 
let user3 : user;
user3 = {userName: "Hello3", userId: 103};
users.push(user3);

console.log(users)

// output here
// { userName: "Hello", userId: 101 }
// { userName: "Hello2", userId: 103 }
// { userName: "Hello3", userId: 103 }



type requestType = "GET" | "POST";

let getRequest : requestType;
getRequest = "GET";

function requestHandler(RequestType : requestType) {
    console.log(RequestType);  // output: "GET"
}

requestHandler("GET");

