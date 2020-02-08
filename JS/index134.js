var numbers = [];
var sum = 0;
for (var i =0;i<1000;i++){
    numbers[i]=i+1;
    sum = sum +numbers[i];
    console.log(sum);
}

if (sum==500500) {
    console.log("Good job!!")
} else {console.log("Take a look to see if something is wrong")}