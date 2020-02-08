var firstName = "Mandy";
var lastName = "Zhang";
let temp1 = `My first name is ${firstName} and it is ${firstName.length} characters long`
let temp2 = `My last name is ${lastName} and it is ${lastName.length} characters long`
let temp3 = `The character difference between my first name and last name is: ${Math.abs(firstName.length - lastName.length)}`
console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log("My first name is longer than my last name: ", firstName.length > lastName.length)