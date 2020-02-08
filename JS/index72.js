let i = 1;
while (i<=13){
    let result="*";
    for (var n= 1; n<i; n++){
        result = "*"+result
    }
    console.log(result)
    i++;
}

/*solution 2 */
let star = '*'
let count = 1;
while (count<=15){
    console.log('%s\n', star);
    star += '*';
    count++; 
}
