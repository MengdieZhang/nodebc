const femaleStudent = ['Anne', 'Mandy','Amy','Chole','Zoe'];
const maleStudent = ['Sam','Mike','Bill','Cobe','Christ'];
const student = femaleStudent.concat(maleStudent);

console.log("femaleStudent:")
for (var i =0;i<femaleStudent.length;i++){
    console.log(femaleStudent[i]);
};
 
console.log("\nmaleStudent:")
var j=0;
while (j<maleStudent.length){
    console.log(maleStudent[j]);
    j++;
}

console.log("\nstudent:")
var n=0;
do {
    console.log(student[n]);
    n++;
} while(n<student.length)