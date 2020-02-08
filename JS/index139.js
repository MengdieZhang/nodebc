var numbers = [];
for (var i =0;i<1000;i++){
    numbers[i]=1000-i;
}

const evenNumbers = numbers.filter(function(number){
    if (number % 2 ==0){
        return number
    }
})

const oddNumbers = numbers.filter(n=>n%2)
 

console.log("first 20 even numbers:",evenNumbers.slice(0,20))

console.log('\nthe last 10 odd numbers:',oddNumbers.slice(-10))