const text = "HELLO";
var result = "";
var i;
for (i = text.length -1; i >=0; i--) {
    result +=text[i]
}
console.log("the final result is: ",result.toLowerCase());

/* solution 2: use reverse() function */
const text1 = "HELLO";
var text2 = text1.split();
var result2 = text2.reverse();
var result3 = result2.join("")
console.log("the final result is: ",result3.toLowerCase());
