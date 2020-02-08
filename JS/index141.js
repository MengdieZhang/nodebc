const tripExpense = [200, 555, 55]
const budget = tripExpense.reduce(function(total,current){
    return total+current;
}) 

console.log(`hotel: ${tripExpense[0]}, trip: ${tripExpense[1]}, meals: ${tripExpense[2]}`)
console.log(`Total trip budget: ${budget}`)