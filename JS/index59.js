const firstNumber = 10;
const secondNumber = 11;
if (firstNumber === secondNumber){
    console.log("They are the same number")
} 
else if (firstNumber > secondNumber){
    temp = `Number ${firstNumber} is bigger than ${secondNumber}`;
    console.log(temp);
} else {
    let temp = `${secondNumber} is bigger than ${firstNumber}`;
    console.log(temp);
}