let userId: string | number;

userId = 123;  // no error
userId = "Hello World";  // no error
// userId = true; // error

console.log("user: ", userId);  // output: "Hello World"

function userInfo(userId: string | number) {
    console.log("function user: ", userId);

    // output:
        // function user: 123
        // function user: "101"
}

userInfo(123);
userInfo("101");
