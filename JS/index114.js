function revert(str){
    var result = "";
    var i;
    for (i = str.length -1; i >=0; i--) {
        result +=str[i]}
    console.log(result)
}

revert("hello")
revert("Today is a wonderful day!")