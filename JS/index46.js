const userAndPassword = "pepito2017,12345";
const username = userAndPassword.substr(0,10);
const password = userAndPassword.substr(-5,userAndPassword.length);
let temp = `The user ${username} has ${password} as password`;
console.log(temp);