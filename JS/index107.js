function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber != 'number' || typeof secondNumber != 'number'){
        console.log('Type Error, input should be numbers')
    }else if (firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`) 
    } else if(firstNumber < secondNumber) {
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`) 
    } else if (firstNumber === secondNumber) { 
        console.log(`Both numbers are ${firstNumber}`) 
    }
    ;
}

biggerNumber(3,5)
biggerNumber(6,3)
biggerNumber(2,2)
biggerNumber('2',2)