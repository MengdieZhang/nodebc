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

const filtered = mutants.filter(function(mutant){
    if (mutant == 'Magneto' || mutant =='Iceman'|| mutant =='Gambit'){
        return mutant
    }
})

console.log('The filtered list :', filtered)