const message = "3.14 it's a great number but 42 it's the answer to life.";
const pi = parseFloat(message.substr(0,3));
const answerToLife = parseInt(message.substr(29,30));
let result = (pi + answerToLife).toString();
console.log("pi: ", pi);
console.log("answerToLife: ", answerToLife);
console.log("result: ", result);