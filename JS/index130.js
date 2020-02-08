const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
]
console.log('original list:', mutants)
let sorted_array=mutants.slice().sort();

let reversed_array = sorted_array.slice().reverse();

let joined_array = reversed_array.join(' * ');

console.log('Sorted list:', sorted_array)
console.log('Reversed list: ', reversed_array)
console.log('Joined list:', joined_array);
