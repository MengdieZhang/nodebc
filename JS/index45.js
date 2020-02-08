const playerName = "Patrik Laine is lame";
const teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
const message = "Winnipeg is the best Canadian city, Go Winnipeg";
const result1 = playerName.slice(0,15)
const result2 = teams.slice(46,50)
const result3 = message.slice(12,20)
const result4=message.slice(-13, -9)
let temp = `${result1} ${result3} ${result2} player${result4} ${result2}!!`
console.log(temp)