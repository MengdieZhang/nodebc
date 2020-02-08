const firstPerson = ['Mandy', 'Zhang', '2770 E 25th AVE', 34]
const secondPerson = ['Bell','Ding', '2550 E 17th AVE', 17]
const thirdPerson = ['Mandy', 'Zhang', '2770 E 25th AVE', 34]

const firstinfo = firstPerson.reduce(function(total, current){
    return total+current;
})

const secondinfo = secondPerson.reduce(function(total, current){
    return total+current;
})

const thirdinfo = thirdPerson.reduce(function(total, current){
    return total+current;
})

if (firstinfo==secondinfo){
    console.log("the first person and the second person are the same person")
} else{
    console.log("first and second one are not the same person")
}

if (firstinfo==thirdinfo){
    console.log("the first person and the third person are the same person")
} else{
    console.log("first and third one are not the same person")
}
