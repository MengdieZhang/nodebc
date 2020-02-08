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

var selected=[];
mutants.forEach(function(mutant){
    if(mutant=='Iceman' || mutant == 'Logan' || mutant =='Phoenix') {
        selected.push(mutant);
    }
})

console.log(selected)