let text = "game of thrones";
const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);
let resultName = firstChar.concat(secondChar,thirdChar);
console.log("the final result is: ", resultName.toUpperCase());

var invalid_value = text.charAt(1000);
console.log("when you use an invalid index number:", invalid_value)