let i = 0;
let sum = 0
do {
    if (i % 2 !== 0){
        sum = sum + i
    }
    i++
} while (i<=1000)
console.log("SUM from 0 to 10000 is :", sum)