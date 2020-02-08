const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

for (var i=0;i<mutants.length;i++){
    if (mutants[i]== 'Magneto'){
        break;
    } else {
        console.log(mutants[i]);
    }
}

/* solution2 : */
console.log("Solution2:")
for (var j=0;j<mutants.indexOf('Magneto');j++){
    console.log(mutants[j]);
}