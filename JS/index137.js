let numbers = [];
for (var i =0;i<1000;i++){
    numbers[i]=i+1;
};

const increment = numbers.map(function(number){
    return number+10;
})

for (var j =0;j<1000;j++){
    console.log(`index:${j+1}, number:${numbers[j]}, increment:${increment[j]}`)
}

